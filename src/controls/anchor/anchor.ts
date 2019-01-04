import { FrameworkElement, FrameworkElementOptions } from "../../framework/framework";

export class Anchor extends FrameworkElement {
    constructor(options: AnchorOptions) {
        super("a", "Anchor", options);

        this.setAttribute({name: "href", value: this.text });

    }

    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}

export interface AnchorOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}