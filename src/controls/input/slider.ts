import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../framework/inputElement";

export class Slider extends InputElement<number> {
    constructor(options?: ISliderOptions) {
        super("Slider", options);

        this.inputType = "range";

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

            this.element.setAttribute("min", this.min.toString());
            this.element.setAttribute("max", this.max.toString());
            if (this.step) {
                this.element.setAttribute("step", this.step.toString());
            }

            ko.applyBindingsToNode(this.element, { value: this.value });

            this.element.onchange = () => {
                if (this.onchange) {
                    const input = this.element as HTMLInputElement;
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
}

export interface ISliderOptions extends InputElementOptions<number> {
    min: number;
    max: number;
    step?: number;
    value?: number| KnockoutObservable<number>;
}