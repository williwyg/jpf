import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface HyperlinkOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}

export class Hyperlink extends UiElement {
    constructor(options?: HyperlinkOptions) {
        super("a", "Hyperlink", options);

        if (options) {
            this.text = options.text;
            this.href = options.href;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            ko.applyBindingsToNode(
                this.element,
                {
                    text: this.text,
                    attr: {
                        href: this.href
                    }
                }
            );
        }
    }

    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}