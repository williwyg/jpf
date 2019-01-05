/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../index";
export declare class InputElement extends FrameworkElement {
    constructor(type: string, options?: InputElementOptions);
    disabled: boolean | KnockoutObservable<boolean>;
    placeholder: string;
}
export interface InputElementOptions extends FrameworkElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string;
}
