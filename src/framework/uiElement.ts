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

export class UiElement {
    constructor(tagName: string, elementType: string, options?: UiElementOptions) {

        this.tagName = tagName;
        this.elementType = elementType;
        if (options) {
            this.id = options.id;
            if (options.elementType) {
                this.elementType = options.elementType;
            }
            if (options.hasOwnProperty("visible")) {
                if (ko.isObservable(options.visible)) {
                    this.visible = options.visible;
                } else {
                    this.visible(options.visible);
                }
            }
            this.className = options.className;
            if (options.attributes) {
                for (let attribute of options.attributes) {
                    this.setAttribute(attribute);
                }
            }
            if (options.style) {
                this.style = options.style;
            }

            //Add the mouse event listeners to the element
            this.onclick = options.onclick;
            this.oncontextmenu = options.oncontextmenu;
            this.ondblclick = options.ondblclick;
            this.onmousedown = options.onmousedown;
            this.onmouseenter = options.onmouseenter;
            this.onmouseleave = options.onmouseleave;
            this.onmousemove = options.onmousemove;
            this.onmouseout = options.onmouseout;
            this.onmouseover = options.onmouseover;
            this.onmouseup = options.onmouseup;
            //Add the touch event listeners to the element
            this.ontouchcancel = options.ontouchcancel;
            this.ontouchend = options.ontouchend;
            this.ontouchmove = options.ontouchmove;
            this.ontouchstart = options.ontouchstart;
        }
    }

    private display: string;
    private setVisibility = (visible: boolean) => {
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

    protected build = (): void => {
        if (this.id) {
            this.element.id = this.id;
        }

        if (this.elementType) {
            this.setAttribute(
                {
                    name: "elementtype",
                    value: this.elementType
                }
            );
        }

        const bindings = {
            style: this.style,
            attr: this.attributes
        }

        if (this.className) {
            if (ko.isObservable(this.className)) {
                bindings["css"] = this.className;
            } else {
                bindings["css"] = {
                    [this.className]: true
                };
            }
        }

        ko.applyBindingsToNode(this.element, bindings);

        //Find out if the element is none selectable
        if (this.selectable === false) {
            this.element.onselectstart = () => {
                return false;
            }
            this.element.style.userSelect = "none";
            this.element.style["-webkit-user-select"] = "none";
            this.element.style["-moz-user-select"] = "none";
            this.element.style["-ms-user-select"] = "none";
        }

        //Add the mouse event listeners to the element
        this.element.onclick = this.onclick;
        this.element.oncontextmenu = this.oncontextmenu;
        this.element.ondblclick = this.ondblclick;
        this.element.onmousedown = this.onmousedown;
        this.element.onmouseenter = this.onmouseenter;
        this.element.onmouseleave = this.onmouseleave;
        this.element.onmousemove = this.onmousemove;
        this.element.onmouseout = this.onmouseout;
        this.element.onmouseover = this.onmouseover;
        this.element.onmouseup = this.onmouseup;
        //Add the touch event listeners to the element
        this.element.ontouchcancel = this.ontouchcancel;
        this.element.ontouchend = this.ontouchend;
        this.element.ontouchmove = this.ontouchmove;
        this.element.ontouchstart = this.ontouchstart;

        //Set the initial visibility of the element
        this.setVisibility(this.visible());

        this.visible.subscribe((visible: boolean) => {
            this.setVisibility(visible);
        });

        if (this.addControlToDataDictionary) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.frameworkElement = this;
        }
    }

    render = (): HTMLElement => {
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

    remove = (): void => {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            } else {
                this.element.parentElement.removeChild(this.element);
            }

            this.element = null;
        }
    }

    getAttribute = (attributeName: string): string => {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        } else {
            return ko.unwrap<string>(this.attributes[attributeName]);
        }
    }

    setAttribute = (attribute: Attribute): void => {
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

    deleteAttribute = (attributeName: string): void => {
        if (this.attributes[attributeName]) {
            delete this.attributes[attributeName];
        }
    }

    getStyle = (cssProperties: Array<types.CssProperty>): Style => {
        const style = {};
        for (let cssProperty of cssProperties) {
            if (this.element) {
                style[cssProperty] = this.element.style[cssProperty];
            } else {
                style[cssProperty] = this.style[cssProperty];
            }
        }
        return style;
    }

    setStyle = (newStyle: Style, overwriteExisting?: boolean): void => {
        //Check of the style property has already been defined.
        if (!this.style) {
            this.style = {};
        }

        for (let styleName in newStyle) {
            if (this.style.hasOwnProperty(styleName)) {
                if (!overwriteExisting) {
                    continue;;
                }
            }
            const newValue = newStyle[styleName];
            const currentValue = this.style[styleName];
            if (currentValue && ko.isObservable(currentValue)) {
                currentValue(ko.unwrap(newValue));
            } else {
                this.style[styleName] = newValue;
                if (this.element) {
                    this.element[styleName] = newValue;
                }
            }
        }
    }

    deleteStyle = (style: types.CssProperty | Array<types.CssProperty> | Style): void => {
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
            if (this.style && this.style.hasOwnProperty(cssProperty)) {
                delete this.style[cssProperty];
            }
            if (this.element) {
                this.element.style[cssProperty] = undefined;
            }
        }
    }

    element: HTMLElement;

    tagName: string;
    id: string;
    elementType: string;
    visible: KnockoutObservable<boolean> = ko.observable<boolean>(true);
    className: string | KnockoutObservable<string>;
    attributes: { [index: string]: string | KnockoutObservable<string> } = {};

    style: Style;
    selectable: boolean = true;
    addControlToDataDictionary: boolean = false;

    //Mouse events
    onclick: (event: MouseEvent) => void;
    oncontextmenu: (event: MouseEvent) => void;
    ondblclick: (event: MouseEvent) => void;
    onmousedown: (event: MouseEvent) => void;
    onmouseenter: (event: MouseEvent) => void;
    onmouseleave: (event: MouseEvent) => void;
    onmousemove: (event: MouseEvent) => void;
    onmouseout: (event: MouseEvent) => void;
    onmouseover: (event: MouseEvent) => void;
    onmouseup: (event: MouseEvent) => void;

    //Touch events
    ontouchcancel: (event: TouchEvent) => void;
    ontouchend: (event: TouchEvent) => void;
    ontouchmove: (event: TouchEvent) => void;
    ontouchstart: (event: TouchEvent) => void;
}