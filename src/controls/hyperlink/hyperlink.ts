import { FrameworkElement, FrameworkElementOptions } from "../../framework/index";

export class Hyperlink extends FrameworkElement {
    constructor(options: HyperlinkOptions) {
        super("a", "Hyperlink", options);

        this.setAttribute({name: "href", value: this.text });

    }

    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}

export interface HyperlinkOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}