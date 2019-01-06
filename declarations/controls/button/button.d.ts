/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement/frameworkElement";
export declare class Button extends FrameworkElement {
    constructor(options?: ButtonOptions);
    content: string | KnockoutObservable<string> | FrameworkElement;
    disabled: boolean | KnockoutObservable<boolean>;
}
export interface ButtonOptions extends FrameworkElementOptions {
    content?: string | KnockoutObservable<string> | FrameworkElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}
