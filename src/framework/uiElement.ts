import * as ko from "knockout";
import { Style, StyleObservable } from "./style";
import { Attribute } from "./attribute";
import { EventListener, IEventListener, IAddEventListenerOptions } from "./eventListener";
import * as types from "./types";

export interface IUiElement {
    render(): HTMLElement;
    getElement(): HTMLElement;
}

export interface UiElementOptions {
    id?: string;
    elementType?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    eventListeners?: Array<IEventListener>;
    style?: StyleObservable;
    selectable?: boolean;
    innerText?: string | KnockoutObservable<string>;
    innerHtml?: string| KnockoutObservable<string>;
    addControlToDataDictionary?: boolean;
    children?: Array<IUiElement> | KnockoutObservableArray<IUiElement>;
    mutationObserverCallback?: MutationCallback;
}

export abstract class UiElement implements IUiElement {
    protected constructor(tagName: string, elementType: string, options?: UiElementOptions) {
        this.tagName = tagName;
        this.options = options || {};

        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }

        if (this.options.innerText) {
            const innerText = this.options.innerText;
            this.innerText = ko.unwrap(innerText);
            if (ko.isObservable(innerText)) {
                innerText.subscribe((newValue: string) => {
                    this.setInnerText(newValue);
                });
            }
        }

        if (this.options.innerHtml) {
            const innerHtml = this.options.innerHtml;
            this.innerHtml = ko.unwrap(innerHtml);
            if (ko.isObservable(innerHtml)) {
                innerHtml.subscribe((newValue: string) => {
                    this.setInnerHtml(newValue);
                });
            }
        }
        
        if (this.options.attributes) {
            this.options.attributes.forEach((attribute) => {
                this.attributes[attribute.name] = ko.unwrap(attribute.value);
                if (ko.isObservable(attribute.value)) {
                    attribute.value.subscribe((newValue) => {
                        this.setAttribute(attribute.name, newValue);
                    });
                }
            });
        }

        if (this.options.children) {
            const children = this.options.children;
            this.children = ko.unwrap(children);
            if (ko.isObservable(children)) {
                children.subscribe((newChildren) => {
                    this.setChildren(newChildren);
                });
            }
        }

        if (this.options.style) {
            for (let styleProperty in Object.keys(this.options.style)) {
                const styleValue = this.options.style[styleProperty];
                this.style[styleProperty] = ko.unwrap(styleValue);
                if (ko.isObservable(styleValue)) {
                    this.addSubscription(styleValue, (newValue) => {
                        this.setStyle({ [styleProperty]: newValue });
                    });
                }
            }
        }
    }

    private mutationObserver: MutationObserver;

    //Private members
    private style: Style = {};
    private innerText: string;
    private innerHtml: string;
    private children = new Array<IUiElement>();
    private display: string;
    private knockoutSubscriptions = Array<KnockoutSubscription>();

    private initializeMutationObserver() {
        if (this.knockoutSubscriptions.length > 0 || this.options.mutationObserverCallback)
            //create an mutation observer to dispose all knockoutSubscriptions created by this UiElement when the element is removed from the dom
            if (!this.mutationObserver) {
                this.mutationObserver = new MutationObserver(
                    (mutations: MutationRecord[], observer: MutationObserver) => {
                        mutations.forEach((mutation) => {
                            if (mutation.removedNodes) {
                                mutation.removedNodes.forEach((removedNode) => {
                                    if (removedNode === this.element) {
                                        for (let knockoutSubscription of this.knockoutSubscriptions) {
                                            knockoutSubscription.dispose();
                                        }
                                    }
                                });
                            }
                        });

                        if (this.options.mutationObserverCallback) {
                            this.options.mutationObserverCallback(mutations, observer);
                        }
                    }
                );

                this.mutationObserver.observe(
                    this.element,
                    {
                        attributes: true,
                        attributeOldValue: true
                    }
                );
            }

    }

    //Protected members
    protected visible: boolean = true;
    protected element: HTMLElement;
    protected readonly options: UiElementOptions;
    protected build(): void {
        if (this.options.id) {
            this.element.id = this.options.id;
        }

        if (this.options.elementType) {
            this.setAttribute("elementtype", this.options.elementType);
        }

        const bindings = {
            style: this.style,
            attr: this.attributes,
            text: this.innerText,
            html: this.innerHtml
        }

        if (this.options.className) {
            if (ko.isObservable(this.options.className)) {
                bindings["css"] = this.options.className;
            } else {
                bindings["css"] = {
                    [this.options.className as string]: true
                };
            }
        }

        ko.applyBindingsToNode(this.element, bindings);

        //Find out if the element is none selectable
        if (this.options.selectable === false) {
            this.element.addEventListener("selectstart", () => { return false; });
            this.element.style.userSelect = "none";
            this.element.style["-webkit-user-select"] = "none";
            this.element.style["-moz-user-select"] = "none";
            this.element.style["-ms-user-select"] = "none";
        }

        //Render the children
        if (this.children) {
            for (let child of this.children) {
                this.element.appendChild(child.render());
            }
        }

        //Set the initial visibility of the element
        this.setVisibility(this.visible);

        const visible = this.options.visible;
        if (ko.isObservable(visible)) {
            visible.subscribe((visible: boolean) => {
                this.setVisibility(visible);
            });
        }

        if (this.options.addControlToDataDictionary) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.uiElement = this;
        }
    }
    protected addSubscription(observable: KnockoutObservable<any>, callback: (newValue) => void) {
        this.knockoutSubscriptions.push(observable.subscribe(callback));
    }

    //Public members
    render(): HTMLElement {
        if (this.element) {
            //If the element has already been rendered before then we remove the previously rendered element.
            this.remove();
        }

        //Check if the build property is pointing to a function.
        if (typeof this.build === "function") {
            //Create the html element.
            this.element = document.createElement(this.tagName);

            //Build the FrameworkElement
            this.build();

            //Add the eventListeners to the element
            if (this.options.eventListeners) {
                this.options.eventListeners.forEach((eventListener) => {
                    this.element.addEventListener(eventListener.type, (event: Event) => {
                        if (event instanceof KeyboardEvent) {
                            const options = eventListener.options as IAddEventListenerOptions;
                            if (options.altKey && !event.altKey) {
                                return;
                            }
                            if (options.shiftKey && !event.shiftKey) {
                                return;
                            }
                            if (options.ctrlKey && !event.ctrlKey) {
                                return;
                            }
                            if (options.eventKey && options.eventKey !== event.key) {
                                return;
                            }

                        }
                        eventListener.listener.call(this, event);
                    });
                });
            }

            //Initialize the MutationObserver
            this.initializeMutationObserver();

            //Return the fully functional html element
            return this.element;
        }

        throw "The build method of this FrameworkElement has not been defined";
    }
    refresh(): void { }
    remove(): void {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            } else {
                this.element.parentElement.removeChild(this.element);
            }

            this.element = null;
        }
    }
    handleMessage(message: object): void { }

    getElement(): HTMLElement {
        return this.element;
    }

    //Public Attribute members
    getAttribute(attributeName: types.AttributeName): string | number {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        } else {
            return ko.unwrap<string | number>(this.attributes[attributeName]);
        }
    }
    setAttribute(name: types.AttributeName, value: string | number): void {
        const currentAttribute = this.attributes[name];
        let applyBindings = false;
        if (currentAttribute) {
            if (ko.isObservable(currentAttribute)) {
                currentAttribute(ko.unwrap(value));
            } else {
                this.attributes[name] = value;
                applyBindings = true;
            }
        } else {
            this.attributes[name] = value;
            applyBindings = true;
        }

        if (applyBindings && this.element) {
            ko.applyBindingsToNode(this.element, { attr: { [name as string]: value } });
        }
    }
    deleteAttribute(attributeName: string): void {
        if (this.attributes[attributeName]) {
            delete this.attributes[attributeName];
        }
    }

    //Public Style members
    getStyle(...cssProperties: Array<types.CssProperty>): Style {
        const style: Style = {};
        for (let cssProperty of cssProperties) {
            if (this.style[cssProperty]) {
                style[cssProperty] = this.style[cssProperty] as never;
            }
            else if (this.element) {
                style[cssProperty] = this.element.style[cssProperty] as never;
            }
        }
        return style;
    }
    getStyleValue(cssProperty: types.CssProperty): any {
        if (this.style[cssProperty]) {
            return this.style[cssProperty];
        } else if (this.element) {
            return this.element.style[cssProperty];
        }
        return null;
    }
    setStyle(newStyle: Style, overwriteExisting?: boolean): void {
        if (newStyle) {
            Object.keys(newStyle).forEach((key: string) => {
                if (this.style.hasOwnProperty(key)) {
                    if (!overwriteExisting) {
                        return;
                    }
                }
                const newValue = newStyle[key];
                const currentValue = this.style[key];
                if (currentValue && ko.isObservable(currentValue)) {
                    currentValue(ko.unwrap(newValue));
                } else {
                    this.style[key] = newValue;
                    if (this.element) {
                        this.element.style[key] = newValue;
                    }
                }
            });
        }
    }
    setStyleNonStandard(name: string, value: any, overwriteExisting?: boolean) {
        this.setStyle({[name]: value}, overwriteExisting);
    }
    deleteStyle(style: types.CssProperty | Array<types.CssProperty> | Style): void {
        let styles: Array<string>;
        if (style instanceof Array) {
            styles = style;
        } else if (style instanceof Object) {
            styles = Object.keys(style as object);
        }
        else {
            styles = [style as string];
        }

        for (let cssProperty of styles) {
            if (this.style && this.style.hasOwnProperty(cssProperty)) {
                delete this.style[cssProperty];
            }
            if (this.element) {
                this.element.style[cssProperty] = undefined;
            }
        }
    }
    setVisibility(visible: boolean) {
        if (this.element) {
            if (visible) {
                this.element.style.display = this.display;
            } else {
                if (this.element.style.display !== "none") {
                    this.display = this.element.style.display;
                }
                this.element.style.display = "none";
            }
        }
    }

    //Public EventListener members
    addEventListener<TType extends keyof HTMLElementEventMap>(
        type: TType,
        listener: (this: UiElement, event: HTMLElementEventMap[TType]) => any,
        options?: boolean | IAddEventListenerOptions
    ) {
        if (!this.options.eventListeners) {
            this.options.eventListeners = new Array();
        }
        this.options.eventListeners.push(new EventListener(type, listener, options));
    }

    //Public Children members
    getChildren(): Array<IUiElement> {
        return this.children;
    }

    setChildren(children: Array<IUiElement>, replace: boolean = true): void {
        if (!children) {
            children = [];
        }

        if (replace) {
            this.children = children;
            if (this.element) {
                //Remove all existing children
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        } else {
            this.children.push(...children);
        }

        if (this.element) {
            if (children.length > 0) {
                //Create a documentFragment to reduce browser repaints
                const documentFragment = document.createDocumentFragment();
                for (let child of children) {
                    documentFragment.appendChild(child.render());
                }

                //Add the documentFragment to the dom
                this.element.appendChild(documentFragment);
            }
        }
    }

    addChild(newChild: IUiElement, referenceChild?: IUiElement): void {
        if (referenceChild) {
            //Find the index of the referenceItem
            const index = this.children.indexOf(referenceChild);
            if (index > -1) {
                this.children.splice(index, 0, newChild);
                if (this.element && referenceChild.getElement()) {
                    this.element.insertBefore(newChild.render(), referenceChild.getElement());
                }
            }
        } else {
            this.children.push(newChild);
            if (this.element) {
                this.element.appendChild(newChild.render());
            }
        }
    }

    removeChild(element: IUiElement): void {
        const index = this.children.indexOf(element);
        if (index > -1) {
            this.children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }

    empty(): void {
        this.children = [];

        if (this.element) {
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
        }
    }

    focus(options?: FocusOptions): void {
        if (this.element) {
            this.element.focus(options);
        }
    }
    focusPreviousSibling(options?: FocusOptions) {
        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {
            (this.element.nextSibling as HTMLElement).focus(options);
        }
    }
    focusNextSibling(options?: FocusOptions) {
        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {
            (this.element.nextSibling as HTMLElement).focus(options);
        }
    }
    setInnerText(innerText: string) {
        this.innerText = innerText;
        if (this.element) {
            this.element.innerText = innerText;
        }
    }
    setInnerHtml(innerHtml: string) {
        this.innerText = innerHtml;
        if (this.element) {
            this.element.innerHTML = innerHtml;
        }
    }
    readonly tagName: string;

    readonly attributes: { [index: string]: string | number } = {};
}