import { FrameworkElement, FrameworkElementOptions } from "../../framework/framework";

export class Span extends FrameworkElement {
    constructor(options: SpanOptions) {
        super("span", "Span", options);

        const build = this.build;
        this.build = () => {
            build();

            ko.applyBindingsToNode(this.element, { html: this.text });
        }

    }

    text: string | KnockoutObservable<string>;
}

export interface SpanOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
}