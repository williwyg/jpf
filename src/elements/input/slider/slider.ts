import ko = require("knockout");
import { InputElement, InputElementOptions } from "../inputElement";

export interface SliderOptions extends InputElementOptions<number> {
    min: number | KnockoutObservable<number>;
    max: number | KnockoutObservable<number>;
    step?: number | KnockoutObservable<number>;
    value?: number | KnockoutObservable<number>;
}

export class Slider extends InputElement<number, SliderOptions> {
    constructor(options?: SliderOptions) {
        super("Slider", "range", options);
    }

    //#region Protected members
    protected build() {
        super.build();

        ko.applyBindingsToNode(this.element,
            {
                value: this.options.value,
                attr: {
                    min: this.options.min,
                    max: this.options.max,
                    step: this.options.step
                }
            });

        this.element.onchange = () => {
            if (this.options.onchange) {
                const input = this.element as HTMLInputElement;
                const value = Number(input.value);
                this.options.onchange(value);
            }
        }
    }
    //#endregion

    //#region Public members
    setMin(minValue: number) {
        const min = this.options.min;
        if (ko.isObservable(min)) {
            min(minValue);
        } else {
            if (this.element) {
                if (minValue) {
                    this.element.setAttribute("min", minValue.toString());
                } else {
                    this.element.removeAttribute("min");
                }
            }
        }
    }
    setMax(maxValue: number) {
        const max = this.options.max;
        if (ko.isObservable(max)) {
            max(maxValue);
        } else {
            if (this.element) {
                if (maxValue) {
                    this.element.setAttribute("max", maxValue.toString());
                } else {
                    this.element.removeAttribute("max");
                }
            }
        }
    }
    setStep(stepValue: number) {
        const step = this.options.step;
        if (ko.isObservable(step)) {
            step(stepValue);
        } else {
            if (this.element) {
                if (stepValue) {
                    this.element.setAttribute("max", stepValue.toString());
                } else {
                    this.element.removeAttribute("max");
                }
            }
        }
    }
    //#endregion
}