import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../../framework/inputElement";

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

        ko.applyBindingsToNode(this.element, { checked: this.options.checked });

        if (this.options.scale) {
            const scale = "scale(" + this.options.scale + ")";
            this.setStyle({
                transform: scale,
                WebKitTransform: scale,
                msTransform: scale
            });
        }

        this.addEventListener("change", () => {
            if (this.options.onchange) {
                const checkbox = this.element as HTMLInputElement;
                this.options.onchange(checkbox.checked);
            }
        });
    }

    readonly options: CheckBoxOptions;
}