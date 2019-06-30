import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface LabelOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    for?: string;
}

export class Label extends UiElement {
    constructor(options?: LabelOptions) {
        super("label", "Label", options);
    }
 
    build () {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                text: this.options.text,
                attr: {
                    for: this.options.for
                }
            }
        );
    }

    readonly options: LabelOptions;
}