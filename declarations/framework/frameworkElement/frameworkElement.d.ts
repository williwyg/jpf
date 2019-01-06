/// <reference types="knockout" />
import { Style } from "../../style/style";
import { Attribute } from "../attribute/attribute";
import * as types from "../../types/types";
export declare class FrameworkElement {
    constructor(tagName: string, elementType: string, options?: FrameworkElementOptions);
    private display;
    private setVisibility;
    protected build(): void;
    render(): HTMLElement;
    remove(): void;
    getAttribute(attributeName: string): string;
    setAttribute(attribute: Attribute): void;
    deleteAttribute(attributeName: string): void;
    getStyle(cssProperties: Array<types.CssProperty>): Style;
    setStyle(style: Style, overwriteExisting?: boolean): void;
    deleteStyle(style: types.CssProperty | Array<types.CssProperty>): void;
    element: HTMLElement;
    tagName: string;
    id: string;
    elementType: string;
    visible: KnockoutObservable<boolean>;
    className: string | KnockoutObservable<string>;
    attributes: {
        [index: string]: string | KnockoutObservable<string>;
    };
    style: Style;
    selectable: boolean;
    addControlToDataDictionary: boolean;
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
    ontouchcancel?: (event: TouchEvent) => void;
    ontouchend?: (event: TouchEvent) => void;
    ontouchmove?: (event: TouchEvent) => void;
    ontouchstart?: (event: TouchEvent) => void;
}
export interface FrameworkElementOptions {
    id?: string;
    elementType?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    style?: Style;
    selectable?: boolean;
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
    ontouchcancel?: (event: TouchEvent) => void;
    ontouchend?: (event: TouchEvent) => void;
    ontouchmove?: (event: TouchEvent) => void;
    ontouchstart?: (event: TouchEvent) => void;
}
