import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";

export class Button extends FrameworkElement {
    constructor(options?: ButtonOptions) {
        super("button", "Button", options);

        if (options) {
            this.content = options.content;
            this.disabled = options.disabled;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (this.content instanceof FrameworkElement) {
                const frameworkElement = this.content as FrameworkElement;
                this.element.appendChild(frameworkElement.render());
            } else {
                ko.applyBindingsToNode(this.element, { text: this.content });
            }

            if (this.disabled) {
                ko.applyBindingsToNode(this.element, { attr: { disabled: this.disabled } });
            }
        }
    }

    content: string| KnockoutObservable<string> | FrameworkElement;
    disabled: boolean| KnockoutObservable<boolean>;
}

export interface ButtonOptions extends FrameworkElementOptions {
    content?: string | KnockoutObservable<string> | FrameworkElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}