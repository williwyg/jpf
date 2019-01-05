/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../../framework/index";
export declare class Slider extends InputElement {
    constructor(options: ISliderOptions);
    min: number;
    max: number;
    step: number;
    value: number | KnockoutObservable<number>;
    onchange: (newValue: number) => void;
}
export interface ISliderOptions extends InputElementOptions {
    min: number;
    max: number;
    step: number;
    value?: number | KnockoutObservable<number>;
    onchange?: (newValue: number) => void;
}
