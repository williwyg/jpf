import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ImageOptions extends UiElementOptions {
    src: string | KnockoutObservable<string>;
    alt?: string;
}

export class Image extends UiElement {
    constructor(options?: ImageOptions) {
        super("img", "Image", options);

        if (options) {
            this.src = options.src;
            this.alt = options.alt;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            ko.applyBindingsToNode(this.element, {
                attr: {
                    src: this.src,
                    alt: this.alt
                }
            });
        }
    }

    src: string | KnockoutObservable<string>;
    alt: string;
}