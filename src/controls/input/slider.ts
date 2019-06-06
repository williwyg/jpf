import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../framework/inputElement";

export interface SliderOptions extends InputElementOptions<number> {
    min: number;
    max: number;
    step?: number;
    value?: number | KnockoutObservable<number>;
}

export class Slider extends InputElement<number, SliderOptions> {
    constructor(options?: SliderOptions) {
        super("Slider", options);

        this.inputType = "range";

        var buildSuper = this.build;
        this.build = () => {
            buildSuper();
            
            this.element.setAttribute("min", this.options.min.toString());
            this.element.setAttribute("max", this.options.max.toString());
            if (this.options.step) {
                this.element.setAttribute("step", this.options.step.toString());
            }

            ko.applyBindingsToNode(this.element, { value: this.options.value });

            this.element.onchange = () => {
                if (this.onchange) {
                    const input = this.element as HTMLInputElement;
                    const value = Number(input.value);
                    this.onchange(value);
                }
            }
        }
    }
}