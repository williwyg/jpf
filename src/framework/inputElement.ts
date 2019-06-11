import ko = require("knockout");
import { UiElement, UiElementOptions} from "./uiElement";

export interface InputElementOptions<TInput> extends UiElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string;
    onchange?: (newValue: TInput) => void;
    validateInput?: (newValue: TInput) => boolean;
}

export class InputElement<TInput> extends UiElement {
    constructor(elementType: string, options?: InputElementOptions<TInput>) {
        super("input", elementType, options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var input = this.element as HTMLInputElement;
            input.type = this.inputType;

            if (this.options.placeholder) {
                input.placeholder = this.options.placeholder;
            }

            if (this.options.disabled) {
                //If the disabled property is either "true" or a knockout observable
                //Then we bind the element to the disabled property
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });
            }
        }
    }

    inputType: InputElementType;
    readonly options: InputElementOptions<TInput>;
}

export type InputElementType =
    "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" |
    "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" |
    "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";