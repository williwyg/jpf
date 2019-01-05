/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";
export declare class Anchor extends FrameworkElement {
    constructor(options: AnchorOptions);
    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}
export interface AnchorOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}
