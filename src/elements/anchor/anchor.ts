import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface AnchorOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}

export class Anchor extends UiElement {
    constructor(options?: AnchorOptions) {
        super("a", "Anchor", options);
    }

    build() {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                text: this.options.text,
                attr: {
                    href: this.options.href
                }
            }
        );
    }

    readonly options: AnchorOptions;
}