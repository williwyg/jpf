import ko = require("knockout");
import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement";

export class Label extends FrameworkElement {
    constructor(options?: LabelOptions) {
        super("label", "Label", options);

        if (options) {
            this.text = options.text;
            this.for = options.for;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            ko.applyBindingsToNode(
                this.element,
                {
                    text: this.text,
                    attr: {
                          for: this.for
                     }
                }
            );
        }
    }

    text: string | KnockoutObservable<string>;
    for: string;
}

export interface LabelOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    for?: string;
}