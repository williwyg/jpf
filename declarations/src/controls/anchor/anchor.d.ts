/// <reference types="knockout" />
import { FrameworkElement } from "../../framework/frameworkElement";
import { AnchorOptions } from "./anchorOptions";
export declare class Anchor extends FrameworkElement {
    constructor(options: AnchorOptions);
    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}
