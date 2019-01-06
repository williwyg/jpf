import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement/frameworkElement";

export class Hyperlink extends FrameworkElement {
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

export interface HyperlinkOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}