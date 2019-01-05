import { Style } from "../../style/style";
import { Attribute } from "../attribute/attribute";
import * as types from "../../types/types";

export class FrameworkElement {
    constructor(tagName: string, type: string, options?: FrameworkElementOptions) {

        this.tagName = tagName;
        this.type = type;
        if (options) {
            this.id = options.id;
            if (options.type) {
                this.type = options.type;
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
        this.element.id = this.id;
        if (this.type) {
            this.element.attributes["type"] = this.type;
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

    render(): HTMLElement {
        if (this.element) {
            throw "This Framework element has already been rendered.";
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

    setAttribute(attribute: Attribute): void { throw new Error("Not implemented"); }

    deleteAttribute(attributeName: string): void { throw new Error("Not implemented"); }

    getStyle(cssProperties: Array<types.CssProperty>): Style {
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

    setStyle(style: Style, overwriteExisting?: boolean): void { throw new Error("Not implemented"); }

    deleteStyle(style: types.CssProperty | Array<types.CssProperty>): void { throw new Error("Not implemented"); }

    element: HTMLElement;

    tagName: string;
    id: string;
    type: string;
    visible: KnockoutObservable<boolean> = ko.observable<boolean>();
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
    ontouchcancel?: (event: TouchEvent) => void;
    ontouchend?: (event: TouchEvent) => void;
    ontouchmove?: (event: TouchEvent) => void;
    ontouchstart?: (event: TouchEvent) => void;
}

export interface FrameworkElementOptions {
    id?: string;
    type?: string;
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