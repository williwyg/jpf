import ko = require("knockout");
import { UiElement, UiElementOptions } from "./uiElement";

export interface InputElementOptions<TInput> extends UiElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string;
    onchange?: (newValue: TInput) => void;
}

export class InputElement<TInput, TOptions extends InputElementOptions<TInput>> extends UiElement<TOptions> {
    constructor(elementType: string, options?: TOptions) {
        super("input", elementType, options);

        if (options) {
            this.disabled = options.disabled;
            this.placeholder = options.placeholder;
            this.onchange = options.onchange;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var input = this.element as HTMLInputElement;
            input.type = this.inputType;

            if (this.placeholder) {
                input.placeholder = this.placeholder;
            }

            if (this.disabled) {
                //If the disabled property is either "true" or a knockout observable
                //Then we bind the element to the disabled property
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.disabled } });
            }
        }
    }

    inputType: InputElementType;
    disabled: boolean | KnockoutObservable<boolean>;
    placeholder: string;
    onchange: (newValue: TInput) => void;
    validateInput: (newValue: TInput) => boolean;
}

export type InputElementType =
    "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" |
    "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" |
    "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";