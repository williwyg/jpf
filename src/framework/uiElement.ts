import * as ko from "knockout";
import { Style, StyleObservable } from "../style/style";
import { Attribute } from "./attribute";
import { EventListener, IEventListener } from "./eventListener";
import * as types from "../types/types";

export interface UiElementOptions<TChild extends UiElement = UiElement> {
    id?: string;
    elementType?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    eventListeners?: Array<IEventListener>;
    style?: StyleObservable;
    selectable?: boolean;
    addControlToDataDictionary?: boolean;
    children?: Array<TChild> | KnockoutObservableArray<TChild>;
}

export class UiElement<TChild extends UiElement<TChild> = UiElement<any>> {
    constructor(tagName: string, elementType: string, options?: UiElementOptions<TChild>) {
        this.tagName = tagName;
        this.options = options || {};

        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }
        const children = this.options.children;
        if (children && ko.isObservable(children)) {
            this.knockoutSubscriptions.push(
                children.subscribe(() => { this.buildChildren(); }));
        }
    }

    //Private members
    private display: string;
    private setVisibility(visible: boolean) {
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
    private knockoutSubscriptions = Array<KnockoutSubscription>();


    //Protected members
    protected options: UiElementOptions<TChild>;


    protected build(): void {
        if (this.options.id) {
            this.element.id = this.options.id;
        }

        if (this.options.elementType) {
            this.setAttribute("elementtype", this.options.elementType);
        }

        const bindings = {
            style: this.options.style,
            attr: this.attributes
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

        //Set the initial visibility of the element
        this.setVisibility(this.visible());

        this.visible.subscribe((visible: boolean) => {
            this.setVisibility(visible);
        });

        if (this.options.addControlToDataDictionary) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.frameworkElement = this;
        }

        this.buildChildren();
    }

    protected buildChildren(): void {
        if (this.element) {
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
            if (this.options.children) {
                const documentFragment = document.createDocumentFragment();
                for (let child of ko.unwrap(this.options.children)) {
                    documentFragment.appendChild((child.render()));
                }
                //Add the documentFragment to the dom
                this.element.appendChild(documentFragment);
            }
        }
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
                for (let eventListener of this.options.eventListeners) {
                    this.element.addEventListener(eventListener.type, (event) => {
                        eventListener.listener.call(null, event, this);
                    });
                }
            }

            //create an mutation observer to dispose all knockoutSubscriptions created by this UiElement when the element is removed from the dom
            new MutationObserver(
                () => {
                    for (let knockoutSubscription of this.knockoutSubscriptions) {
                        knockoutSubscription.dispose();
                    }
                }
            ).observe(this.element);

            //Return the fully functional html element
            return this.element;
        }

        throw "The build method of this FrameworkElement has not been defined";
    }
    refresh(): void { }
    handleWebsocketMessage(websocketMessage: any): void {}

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

    getAttribute(attributeName: types.AttributeName): string | number {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        } else {
            return ko.unwrap<string | number>(this.attributes[attributeName]);
        }
    }

    setAttribute(name: types.AttributeName, value: string | number | KnockoutObservable<string | number>): void {
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

    getStyle(...cssProperties: Array<types.CssProperty>): Style {
        const style: Style = {};
        for (let cssProperty of cssProperties) {
            if (this.options.style[cssProperty]) {
                style[cssProperty] = ko.unwrap(this.options.style[cssProperty]);
            }
            else if (this.element) {
                style[cssProperty] = this.element.style[cssProperty];
            }
        }
        return style;
    }

    setStyle(newStyle: Style, overwriteExisting?: boolean): void {
        //Check of the style property has already been defined.
        if (!this.options.style) {
            this.options.style = {};
        }

        for (let styleName in newStyle) {
            if (this.options.style.hasOwnProperty(styleName)) {
                if (!overwriteExisting) {
                    continue;
                }
            }
            const newValue = newStyle[styleName];
            const currentValue = this.options.style[styleName];
            if (currentValue && ko.isObservable(currentValue)) {
                currentValue(ko.unwrap(newValue));
            } else {
                this.options.style[styleName] = newValue;
                if (this.element) {
                    this.element.style[styleName] = newValue;
                }
            }
        }
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
            if (this.options.style && this.options.style.hasOwnProperty(cssProperty)) {
                delete this.options.style[cssProperty];
            }
            if (this.element) {
                this.element.style[cssProperty] = undefined;
            }
        }
    }

    addEventListener<TType extends keyof HTMLElementEventMap>(
        type: TType,
        listener: (this: HTMLElement, event: HTMLElementEventMap[TType], uiElement: UiElement) => any,
        options?: boolean | AddEventListenerOptions
    ) {
        if (!this.options.eventListeners) {
            this.options.eventListeners = new Array();
        }
        this.options.eventListeners.push(new EventListener(type, listener, options));
    }

    addSubscription(observable: KnockoutObservable<any>, callback: (newValue) => void) {
        this.knockoutSubscriptions.push(observable.subscribe(callback));
    }


    getChildren(): Array<TChild> {
        return ko.unwrap(this.options.children);
    }
    setChildren(children: Array<TChild>): void {
        this.options.children = children;
        this.buildChildren();
    }
    addChild(newChild: TChild, referenceChild?: TChild): void {
        if (referenceChild) {
            //Find the index of the referenceItem
            const index = this.options.children.indexOf(referenceChild);
            if (index > -1) {
                this.options.children.splice(index, 0, newChild);
                if (this.element && referenceChild.element) {
                    this.element.insertBefore(newChild.render(), referenceChild.element);
                }
            }
        } else {
            this.options.children.push(newChild);
            if (this.element) {
                this.element.appendChild(newChild.render());
            }
        }
    }
    removeChild(element: TChild): void {
        const index = this.options.children.indexOf(element);
        if (index > -1) {
            this.options.children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }
    removeChildren(): void {
        const children = this.options.children;
        if (ko.isObservable(children)) {
            children([]);
        } else {
            this.options.children = [];
            if (this.element) {
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        }
    }

    protected element: HTMLElement;
    readonly tagName: string;
    readonly visible = ko.observable<boolean>(true);
    readonly attributes: { [index: string]: string | number | KnockoutObservable<string | number> } = {};
}