/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../index";
export declare class InputElement<TInput> extends FrameworkElement {
    constructor(type: string, options?: InputElementOptions<TInput>);
    disabled: boolean | KnockoutObservable<boolean>;
    placeholder: string;
    onchange: (newValue: TInput) => void;
}
export interface InputElementOptions<TInput> extends FrameworkElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string;
    onchange?: (newValue: TInput) => void;
}
