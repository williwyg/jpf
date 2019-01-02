import { Jpf } from "../index";

export class FrameworkElement implements Jpf.FrameworkElement {

    constructor(tagName: string, type: string, options: Jpf.FrameworkElementOptions) {
        //TBD
    }

    getAttribute(attributeName: string): string {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        } else {
            return ko.unwrap<string>(this.attributes[attributeName]);
        }
    }

    setAttribute(attribute: Jpf.Attribute): void { throw new Error("Not implemented"); }

    deleteAttribute(attributeName: string): void { throw new Error("Not implemented"); }

    getStyle(cssProperties: Array<Jpf.Css.Types.CssProperties>): Jpf.Css.Style {
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

    setStyle(style: Jpf.Css.Style, overwriteExisting?: boolean): void { throw new Error("Not implemented"); }

    deleteStyle(style: Jpf.Css.Types.CssProperties | Array<Jpf.Css.Types.CssProperties>): void { throw new Error("Not implemented"); }

    element: HTMLElement;

    id: string;
    type: string;
    visible: KnockoutObservable<boolean>;
    className: string | KnockoutObservable<string>;
    attributes: { [index: string]: string | KnockoutObservable<string>; } = {};

    style: Jpf.Css.Style;

}