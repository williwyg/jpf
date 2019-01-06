/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../index";
export declare class InputElement<TInput> extends FrameworkElement {
    constructor(elementType: string, options?: InputElementOptions<TInput>);
    inputType: InputElementType;
    disabled: boolean | KnockoutObservable<boolean>;
    placeholder: string;
    onchange: (newValue: TInput) => void;
}
export interface InputElementOptions<TInput> extends FrameworkElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string;
    onchange?: (newValue: TInput) => void;
}
export declare type InputElementType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
