import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../framework/inputElement/inputElement";

export class CheckBox extends InputElement<boolean> {
    constructor(options?: CheckBoxOptions) {
        super("CheckBox", options);

        this.inputType = "checkbox";

        if (options) {
            this.checked = options.checked;
            this.scale = options.scale;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            const input = this.element as HTMLInputElement;

            ko.applyBindingsToNode(input, { checked: this.checked });

            if (this.scale) {
                const scale = "scale(" + this.scale + ")";
                this.element.style["transform"] = scale;
                this.element.style["WebkitTransform"] = scale;
                this.element.style["msTransform"] = scale;
            }

            this.element.onchange = () => {
                if (this.onchange) {
                    this.onchange(input.checked);
                }
            }
        }
    }

    checked: boolean | KnockoutObservable<boolean>;
    scale: number;
}

export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean | KnockoutObservable<boolean>;
    scale?: number;
}