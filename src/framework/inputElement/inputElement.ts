import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../index";

export class InputElement<TInput> extends FrameworkElement {
    constructor(type: string, options?: InputElementOptions<TInput>) {
        super("input", type, options);

        if (options) {
            this.disabled = options.disabled;
            this.placeholder = options.placeholder;
            this.onchange = options.onchange;
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

    disabled: boolean | KnockoutObservable<boolean>;
    placeholder: string;
    onchange: (newValue: TInput) => void;
}

export interface InputElementOptions<TInput> extends FrameworkElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string;
    onchange?: (newValue: TInput) => void;
}