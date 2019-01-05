import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";

export class Button extends FrameworkElement {
    constructor(options?: ButtonOptions) {
        super("button", "Button", options);

        if (options) {
            if (options.disabled) {
                if (ko.isObservable(options.disabled)) {
                    this.disabled = options.disabled;
                } else {
                    this.disabled(options.disabled);
                }
            }
        }

        const build = this.build;
        this.build = () => {
            build();

            if (this.content instanceof FrameworkElement) {
                const frameworkElement = this.content as FrameworkElement;
                this.element.appendChild(frameworkElement.render());
            } else {
                ko.applyBindingsToNode(this.element, { text: this.content });
            }

            ko.applyBindingsToNode(this.element, { attr: { disabled: this.disabled } });
        }
    }

    content: string| KnockoutObservable<string> | FrameworkElement;
    disabled = ko.observable<boolean>(false);
}

export interface ButtonOptions extends FrameworkElementOptions {
    content?: string | KnockoutObservable<string> | FrameworkElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}