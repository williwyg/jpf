import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ImageOptions extends UiElementOptions {
    src: string | KnockoutObservable<string>;
    alt?: string;
}

export class Image extends UiElement<ImageOptions> {
    constructor(options?: ImageOptions) {
        super("img", "Image", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            ko.applyBindingsToNode(this.element, {
                attr: {
                    src: this.options.src,
                    alt: this.options.alt
                }
            });
        }
    }
}