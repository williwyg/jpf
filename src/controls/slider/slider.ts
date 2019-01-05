﻿import * as ko from "knockout";
import {InputElement, InputElementOptions} from "../../framework/index";

export class Slider extends InputElement {
    constructor(options: ISliderOptions) {
        super("Slider", options);

        if (options) {
            this.min = options.min;
            this.max = options.max;
            this.step = options.step;
            this.value = options.value;
            this.onchange = options.onchange;
        }

        var buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var input = this.element as HTMLInputElement;
            input.type = "range";

            this.element.setAttribute("min", this.min.toString());
            this.element.setAttribute("max", this.max.toString());
            if (this.step) {
                this.element.setAttribute("step", this.step.toString());
            }

            ko.applyBindingsToNode(this.element, { value: this.value });

            this.element.onchange = () => {
                if (this.onchange) {
                    const value = Number(input.value);
                    this.onchange(value);
                }
            }
        }
    }

    min: number;
    max: number;
    step: number;
    value: number| KnockoutObservable<number>;
    onchange: (newValue: number) => void;
}

export interface ISliderOptions extends InputElementOptions {
    min: number;
    max: number;
    step: number;
    value?: number| KnockoutObservable<number>;
    onchange?: (newValue: number) => void;
}