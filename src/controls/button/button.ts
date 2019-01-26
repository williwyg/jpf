import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ButtonOptions extends UiElementOptions {
    content?: string | KnockoutObservable<string> | UiElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}

export class Button extends UiElement {
    constructor(options?: ButtonOptions) {
        super("button", "Button", options);

        if (options) {
            this.content = options.content;
            this.disabled = options.disabled;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (this.content instanceof UiElement) {
                const frameworkElement = this.content as UiElement;
                this.element.appendChild(frameworkElement.render());
            } else {
                ko.applyBindingsToNode(this.element, { text: this.content });
            }

            if (this.disabled) {
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.disabled } });
            }
        }
    }

    content: string| KnockoutObservable<string> | UiElement;
    disabled: boolean| KnockoutObservable<boolean>;
}