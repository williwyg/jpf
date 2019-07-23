import * as ko from "knockout";
import { Style } from "../style/style";
import { Attribute } from "./attribute";
import { EventListener, IEventListener } from "./eventListener";
import * as types from "../types/types";

export interface UiElementOptions {
    id?: string;
    elementType?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    eventListeners?: Array<IEventListener>;
    style?: Style;
    selectable?: boolean;
    addControlToDataDictionary?: boolean;
}

export class UiElement {
    constructor(tagName: string, elementType: string, options?: UiElementOptions) {
        this.tagName = tagName;
        this.options = options || {};

        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }
    }

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
    }

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

    getAttribute(attributeName: string): string {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        } else {
            return ko.unwrap<string>(this.attributes[attributeName]);
        }
    }

    setAttribute(name: types.AttributeName, value: string | KnockoutObservable<string>): void {
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

    getStyle(cssProperties: Array<types.CssProperty>): Style {
        const style = {};
        for (let cssProperty of cssProperties) {
            if (this.element) {
                style[cssProperty] = this.element.style[cssProperty];
            } else {
                style[cssProperty] = this.options.style[cssProperty];
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
            styles = Object.keys(style);
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

    element: HTMLElement;
    readonly tagName: string;
    readonly visible = ko.observable<boolean>(true);
    readonly attributes: { [index: string]: string | KnockoutObservable<string> } = {};
    options = {} as UiElementOptions;
}