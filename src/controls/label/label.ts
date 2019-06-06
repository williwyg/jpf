import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface LabelOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    for?: string;
}

export class Label extends UiElement<LabelOptions> {
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