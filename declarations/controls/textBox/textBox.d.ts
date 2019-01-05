/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../../framework/index";
export declare class TextBox extends InputElement {
    constructor(options?: TextBoxOptions);
    text: string | KnockoutObservable<string>;
    for: string;
}
export interface TextBoxOptions extends InputElementOptions {
    text?: string | KnockoutObservable<string>;
    for?: string;
}
