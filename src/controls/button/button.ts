import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ButtonOptions extends UiElementOptions {
    content?: string | KnockoutObservable<string> | UiElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}

export class Button extends UiElement {
    constructor(options?: ButtonOptions) {
        super("button", "Button", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (this.options.content instanceof UiElement) {
                const frameworkElement = this.options.content as UiElement;
                this.element.appendChild(frameworkElement.render());
            } else {
                ko.applyBindingsToNode(this.element, { text: this.options.content });
            }

            if (this.options.disabled) {
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });
            }
        }
    }

    readonly options: ButtonOptions;
}