/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../../framework/index";
export declare class TextBox extends InputElement<string> {
    constructor(options?: TextBoxOptions);
    text: string | KnockoutObservable<string>;
    valueUpdateMode: TextBoxValueUpdateMode;
}
export interface TextBoxOptions extends InputElementOptions<string> {
    text?: string | KnockoutObservable<string>;
    valueUpdateMode?: TextBoxValueUpdateMode;
}
export declare type TextBoxValueUpdateMode = "OnLostFocus" | "OnKeyPress";
