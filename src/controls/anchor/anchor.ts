import { FrameworkElement } from "../../framework/frameworkElement";
import { AnchorOptions } from "./anchorOptions";

export class Anchor extends FrameworkElement {
    constructor(options: AnchorOptions) {
        super("a", "anchor", options);

        this.setAttribute({name: "href", value: this.text });

    }

    text: string | KnockoutObservable<string>;
    href: string | KnockoutObservable<string>;
}