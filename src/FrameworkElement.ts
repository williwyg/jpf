import * as types from "./Types";
import {Style} from "./Style";

export class FrameworkElement {

    constructor(tagName: string, type: string, options: FrameworkElementOptions) {
        //TBD
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

    getStyle(cssProperties: Array<types.CssProperties>): Style {
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

    deleteStyle(style: types.CssProperties | Array<types.CssProperties>): void { throw new Error("Not implemented"); }

    element: HTMLElement;

    id: string;
    type: string;
    visible: KnockoutObservable<boolean>;
    className: string | KnockoutObservable<string>;
    attributes: { [index: string]: string | KnockoutObservable<string>; } = {};

    style: Style;

}

export interface FrameworkElementOptions {
    id?: string;
    type?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    style?: Style;
}

export interface Attribute {
    name: string;
    value: string | KnockoutObservable<string>;
}
