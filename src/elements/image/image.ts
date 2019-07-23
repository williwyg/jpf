import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ImageOptions extends UiElementOptions {
    src: string | KnockoutObservable<string>;
    alt?: string;
}

export class Image extends UiElement {
    constructor(options?: ImageOptions) {
        super("img", "Image", options);
    }

    build() {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                attr: {
                    src: this.options.src,
                    alt: this.options.alt
                }
            }
        );
    }

    readonly options: ImageOptions;
}