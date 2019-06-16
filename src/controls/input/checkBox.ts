import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../framework/inputElement";

export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean | KnockoutObservable<boolean>;
    scale?: number;
}

export class CheckBox extends InputElement<boolean> {
    constructor(options?: CheckBoxOptions) {
        super("CheckBox", "checkbox", options);
    }

    build() {
        super.build();

        const input = this.element as HTMLInputElement;

        ko.applyBindingsToNode(input, { checked: this.options.checked });

        if (this.options.scale) {
            const scale = "scale(" + this.options.scale + ")";
            this.element.style["transform"] = scale;
            this.element.style["WebkitTransform"] = scale;
            this.element.style["msTransform"] = scale;
        }

        this.element.onchange = () => {
            if (this.options.onchange) {
                this.options.onchange(input.checked);
            }
        }
    }

    readonly options: CheckBoxOptions;
}