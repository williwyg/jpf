import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement";

export class Image extends FrameworkElement {
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

export interface ImageOptions extends FrameworkElementOptions {
    src: string | KnockoutObservable<string>;
    alt?: string;
}