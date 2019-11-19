import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface InputElementOptions<TInput> extends UiElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string | KnockoutObservable<string>;
    onchange?: (newValue: TInput) => void;

}

export interface InputElementValidityCheckOptions<TInput> {
    checkValidity?: (oldValue: TInput, newValue: TInput) => boolean;
}

export class InputElement<TInput> extends UiElement {
    constructor(elementType: string, inputType: InputElementType, options?: InputElementOptions<TInput>) {
        super("input", elementType, options);
        this.inputType = inputType;
    }

    //Protected members
    protected readonly options: InputElementOptions<TInput>;
    protected build() {
        super.build();

        this.element.type = this.inputType;

        ko.applyBindingsToNode(
            this.element,
            {
                attr: {
                    disabled: this.options.disabled,
                    placeholder: this.options.placeholder
                }
            }
        );
    }

    //Public members
    readonly element: HTMLInputElement;
    readonly inputType: InputElementType;
}

export type InputElementType =
    "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" |
    "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" |
    "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";