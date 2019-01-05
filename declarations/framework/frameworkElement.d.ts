/// <reference types="knockout" />
import { FrameworkElementOptions } from "./frameworkElementOptions";
import { Style } from "../style/style";
import { Attribute } from "./attribute";
import * as types from "../types/types";
export declare class FrameworkElement {
    constructor(tagName: string, type: string, options?: FrameworkElementOptions);
    private display;
    private setVisibility;
    build(): void;
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
    type: string;
    visible: KnockoutObservable<boolean>;
    className: string | KnockoutObservable<string>;
    attributes: {
        [index: string]: string | KnockoutObservable<string>;
    };
    style: Style;
    addControlToDataDictionary: boolean;
}
