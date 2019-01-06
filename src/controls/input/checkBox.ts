import * as ko from "knockout";
import { InputElement, InputElementOptions } from "../../framework/index";

export class CheckBox extends InputElement<boolean> {
    constructor(options?: CheckBoxOptions) {
        super("CheckBox", options);

        this.inputType = "checkbox";

        if (options) {
            this.checked = options.checked;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            const input = this.element as HTMLInputElement;

            ko.applyBindingsToNode(input, { checked: this.checked });

            this.element.onchange = () => {
                if (this.onchange) {
                    this.onchange(input.checked);
                }
            }
        }
    }

    checked: boolean | KnockoutObservable<boolean>;
}

export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean| KnockoutObservable<boolean>;
}