/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";
export declare class Label extends FrameworkElement {
    constructor(options?: LabelOptions);
    text: string | KnockoutObservable<string>;
    for: string;
}
export interface LabelOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    for?: string;
}
