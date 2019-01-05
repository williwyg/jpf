import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../index";

export class InputElement extends FrameworkElement {
    constructor(type: string, options?: InputElementOptions) {
        super("input", type, options);

        if (options) {
            this.disabled = options.disabled;
            this.placeholder = options.placeholder;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var input = this.element as HTMLInputElement;
            input.placeholder = this.placeholder;

            if (this.disabled) {
                //If the disabled property is either "true" or a knockout observable
                //Then we bind the element to the disabled property
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.disabled } });
            }
        }
    }

    disabled:  boolean | KnockoutObservable<boolean>;
    placeholder: string;
}

export interface InputElementOptions extends FrameworkElementOptions {
    disabled?: boolean| KnockoutObservable<boolean>;
    placeholder?: string;
}