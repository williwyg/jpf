/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../../framework/index";
export declare class Slider extends InputElement<number> {
    constructor(options: ISliderOptions);
    min: number;
    max: number;
    step: number;
    value: number | KnockoutObservable<number>;
}
export interface ISliderOptions extends InputElementOptions<number> {
    min: number;
    max: number;
    step: number;
    value?: number | KnockoutObservable<number>;
}
