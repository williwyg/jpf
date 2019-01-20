import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement";
import { Button, ButtonOptions } from "./button";
import { Image, ImageOptions } from "../image/image";

export class ImageButton extends FrameworkElement {
    constructor(options?: ImageButtonOption) {
        super("button", "ImageButton", options);

        if (options) {
            this.imageOptions = options.imageOptions;
            this.buttonOptions = options.buttonOptions;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var button = new Button(this.buttonOptions);
            button.content = new Image(this.imageOptions);

            this.element = button.render();
        }
    }

    imageOptions: ImageOptions;
    buttonOptions: ButtonOptions;
}

export interface ImageButtonOption extends FrameworkElementOptions {
    imageOptions: ImageOptions;
    buttonOptions: ButtonOptions;
}