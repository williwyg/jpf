/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";
export declare class Hyperlink extends FrameworkElement {
    constructor(options: HyperlinkOptions);
    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}
export interface HyperlinkOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}
