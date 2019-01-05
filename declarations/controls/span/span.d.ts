/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";
export declare class Span extends FrameworkElement {
    constructor(options: SpanOptions);
    text: string | KnockoutObservable<string>;
}
export interface SpanOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
}
