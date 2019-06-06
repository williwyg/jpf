import ko = require("knockout");
import { Style } from "../style/style";
import { Attribute } from "./attribute";
import * as types from "../types/types";

export interface UiElementOptions {
    id?: string;
    elementType?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    style?: Style;
    selectable?: boolean;
    addControlToDataDictionary?: boolean;

    //Mouse events
    onclick?: (event: MouseEvent) => void;
    oncontextmenu?: (event: MouseEvent) => void;
    ondblclick?: (event: MouseEvent) => void;
    onmousedown?: (event: MouseEvent) => void;
    onmouseenter?: (event: MouseEvent) => void;
    onmouseleave?: (event: MouseEvent) => void;
    onmousemove?: (event: MouseEvent) => void;
    onmouseout?: (event: MouseEvent) => void;
    onmouseover?: (event: MouseEvent) => void;
    onmouseup?: (event: MouseEvent) => void;

    //Touch events
    ontouchcancel?: (event: TouchEvent) => void;
    ontouchend?: (event: TouchEvent) => void;
    ontouchmove?: (event: TouchEvent) => void;
    ontouchstart?: (event: TouchEvent) => void;
}

export class UiElement<TOptions extends UiElementOptions> {
    constructor(tagName: string, elementType: string, options?: TOptions) {

        this.tagName = tagName;
        if (options) {
            this.options = options;
        }

        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }

        if (!this.options.addControlToDataDictionary) {
            this.options.addControlToDataDictionary = false;
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

    protected build(): void {
        if (this.options.id) {
            this.element.id = this.options.id;
        }

        if (this.options.elementType) {
            this.setAttribute(
                {
                    name: "elementtype",
                    value: this.options.elementType
                }
            );
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
            this.element.onselectstart = () => {
                return false;
            }
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

    setAttribute(attribute: Attribute): void {
        const currentAttribute = this.attributes[attribute.name];
        if (currentAttribute) {
            if (ko.isObservable(currentAttribute)) {
                currentAttribute(ko.unwrap(attribute.value));
            } else {
                this.attributes[attribute.name] = attribute.value;
            }
        } else {
            this.attributes[attribute.name] = attribute.value;
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
                    this.element[styleName] = newValue;
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
        for (let cssProperty in styles) {
            if (this.options.style && this.options.style.hasOwnProperty(cssProperty)) {
                delete this.options.style[cssProperty];
            }
            if (this.element) {
                this.element.style[cssProperty] = undefined;
            }
        }
    }

    element: HTMLElement;
    readonly tagName: string;
    readonly visible = ko.observable<boolean>(true);
    readonly attributes: { [index: string]: string | KnockoutObservable<string> } = {};
    readonly options = {} as TOptions;
}