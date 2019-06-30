﻿import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../../framework/inputElement";

export interface SliderOptions extends InputElementOptions<number> {
    min: number;
    max: number;
    step?: number;
    value?: number | KnockoutObservable<number>;
}

export class Slider extends InputElement<number> {
    constructor(options?: SliderOptions) {
        super("Slider", "range", options);
    }

    build() {
        super.build();

        this.element.setAttribute("min", this.options.min.toString());
        this.element.setAttribute("max", this.options.max.toString());
        if (this.options.step) {
            this.element.setAttribute("step", this.options.step.toString());
        }

        ko.applyBindingsToNode(this.element, { value: this.options.value });

        this.element.onchange = () => {
            if (this.options.onchange) {
                const input = this.element as HTMLInputElement;
                const value = Number(input.value);
                this.options.onchange(value);
            }
        }
    }

    readonly options: SliderOptions;
}