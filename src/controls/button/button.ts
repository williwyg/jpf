import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ButtonOptions extends UiElementOptions {
    content?: string | KnockoutObservable<string> | UiElement<UiElementOptions>;
    disabled?: boolean | KnockoutObservable<boolean>;
}

export class Button<TOptions extends ButtonOptions = ButtonOptions> extends UiElement<TOptions> {
    constructor(options?: TOptions) {
        super("button", "Button", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (this.options.content instanceof UiElement) {
                const frameworkElement = this.options.content as UiElement<UiElementOptions>;
                this.element.appendChild(frameworkElement.render());
            } else {
                ko.applyBindingsToNode(this.element, { text: this.options.content });
            }

            if (this.options.disabled) {
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });
            }
        }
    }
}