import * as ko from "knockout";
import { Style, StyleObservable } from "./style";
import { Attribute } from "./attribute";
import { EventListener, IEventListener, IAddEventListenerOptions } from "./eventListener";
import * as types from "./types";
import {device} from "./device"

var uiElementPropertyName = "uiElement";

export var settings = {
    tapDelay: 300
}

var observerOptions: MutationObserverInit = {
    childList: true,
    subtree: true
}

var mutationObserver = new MutationObserver(
    (mutationRecords: MutationRecord[]) => {
        mutationRecords.forEach((mutationRecord) => {
            if (mutationRecord.removedNodes) {
                mutationRecord.removedNodes.forEach((removedNode) => {
                    var uiElement = removedNode[uiElementPropertyName] as IDisposable;
                    if (uiElement && uiElement.dispose) {
                        uiElement.dispose();
                    }
                });
            }
        });
    }
);

mutationObserver.observe(
    document.body,
    observerOptions
);

export function setObserverOptions(options: MutationObserverInit) {
    observerOptions = options;
}

interface IDisposable {
    dispose(): void;
}

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
    innerTextIsHtml?: boolean;
    addControlToDataDictionary?: boolean;
    children?: Array<IUiElement> | KnockoutObservableArray<IUiElement>;
    dispose?: () => void;
}

export abstract class UiElement<TOptions extends UiElementOptions = UiElementOptions> implements IUiElement {
    protected constructor(tagName: string, elementType: string, options?: TOptions) {
        this.tagName = tagName;
        this.options = options || {} as TOptions;

        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }

        this.innerTextIsHtml = this.options.innerTextIsHtml;

        if (this.options.innerText) {
            const innerText = this.options.innerText;
            this.innerText = ko.unwrap(innerText);
            if (ko.isObservable(innerText)) {
                innerText.subscribe((newValue: string) => {
                    if (this.innerTextIsHtml) {
                        setInterval(newValue);
                    } else {
                        this.setInnerText(newValue);
                    }
                });
            }
        }

        if (this.options.attributes) {
            this.options.attributes.forEach((attribute) => {
                this.attributes[attribute.name] = ko.unwrap(attribute.value);
                if (ko.isObservable(attribute.value)) {
                    this.addSubscription(attribute.value, (newValue) => {
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
            for (let styleProperty of Object.keys(this.options.style)) {
                const styleValue = this.options.style[styleProperty];
                this.style[styleProperty] = ko.unwrap(styleValue);
                if (ko.isObservable(styleValue)) {
                    this.addSubscription(styleValue, (newValue) => {
                        this.setStyle({ [styleProperty]: newValue } as any as Style);
                    });
                }
            }
        }
    }

    //Private members
    private attributes: { [index: string]: string | number } = {};
    private style: Style = {};
    private innerText: string;
    private innerTextIsHtml: boolean = false;
    private children = new Array<IUiElement>();
    private display: string;
    private knockoutSubscriptions = Array<KnockoutSubscription>();

    private dispose() {
        this.knockoutSubscriptions.forEach((subscription) => {
            subscription.dispose();
        });
        if (this.options.dispose) {
            this.options.dispose();
        }
    };

    //Protected members
    protected visible = true;
    protected element: HTMLElement;
    protected readonly options: TOptions;
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
        }

        if (this.innerText) {
            if (this.innerTextIsHtml) {
                bindings["html"] = this.innerText;
            } else {
                bindings["text"] = this.innerText;
            }
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

            //Attach this UiElement to the HtmlElement
            this.element[uiElementPropertyName] = this;

            //Build the FrameworkElement
            this.build();

            //Add the eventListeners to the element
            let clickEventListener: IEventListener;
            let doubleClickEventListener: IEventListener;

            if (this.options.eventListeners) {
                const eventListeners = this.options.eventListeners;
                eventListeners.forEach((eventListener) => {
                    if (eventListener.type === "click") {
                        clickEventListener = eventListener;
                        return;
                    }
                    if (eventListener.type === "dblclick") {
                        doubleClickEventListener = eventListener;
                        return;
                    }

                    if (eventListener.isSupportedOnAllPlatforms) {
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
                    }

                    if(device.supportsMouseEvents) {
                        if (eventListener.type.indexOf("mouse") > -1) {
                            this.element.addEventListener(eventListener.type, (event: Event) => {
                                eventListener.listener.call(this, event);
                            });
                        }
                    }

                    if (device.supportsTouchEvents) {
                        if (eventListener.type.indexOf("touch") > -1) {
                            this.element.addEventListener(eventListener.type, (event: Event) => {
                                eventListener.listener.call(this, event);
                            });
                        }
                    }
                });

                if (device.supportsMouseEvents) {
                    if (clickEventListener) {
                        this.element.addEventListener("click", (event: Event) => {
                            clickEventListener.listener.call(this, event);
                        });
                    }

                    if (doubleClickEventListener) {
                        this.element.addEventListener("dblclick", (event: Event) => {
                            doubleClickEventListener.listener.call(this, event);
                        });
                    }
                }

                if (device.supportsTouchEvents) {
                    if (doubleClickEventListener) {
                        let tapTimeout: any;
                        let lastTap = 0;

                        this.element.addEventListener("touchend", (touchEvent: TouchEvent) => {
                            clearTimeout(tapTimeout);

                            var currentTime = new Date().getTime();
                            var tapLength = currentTime - lastTap;
                            if (tapLength < settings.tapDelay && tapLength > 0) {
                                touchEvent.preventDefault();
                                doubleClickEventListener.listener.call(this, touchEvent);
                            } else {
                                tapTimeout = setTimeout(
                                    () => {
                                        if (clickEventListener) {
                                            touchEvent.preventDefault();
                                            clickEventListener.listener.call(this, touchEvent);
                                        }
                                        clearTimeout(tapTimeout);
                                    },
                                    settings.tapDelay
                                );
                            }

                            lastTap = currentTime;
                        });
                    } else if (clickEventListener) {
                        this.element.addEventListener("touchstart", () => {
                            clickEventListener.listener.call(this, event);
                        });
                    }
                }
            }

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
        this.setStyle({ [name]: value } as any as Style, overwriteExisting);
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

    readonly tagName: string;


}
