/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../../framework/inputElement/inputElement";
export declare class CheckBox extends InputElement<boolean> {
    constructor(options?: CheckBoxOptions);
    checked: boolean | KnockoutObservable<boolean>;
}
export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean | KnockoutObservable<boolean>;
}
