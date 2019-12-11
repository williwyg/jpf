import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ButtonOptions extends UiElementOptions {
    content?: string | KnockoutObservable<string> | UiElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}

export class Button extends UiElement<ButtonOptions> {
    constructor(options?: ButtonOptions) {
        super("button", "Button", options);
    }

    protected build() {
        super.build();

        const content = this.options.content;
        if (content instanceof UiElement) {
            this.element.appendChild(content.render());
        } else {
            ko.applyBindingsToNode(this.element, { text: content });
        }

        if (ko.unwrap(this.options.disabled)) {
            ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });
        }
    }
}