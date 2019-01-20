import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement";
import { ToggleButton, ToggleButtonOptions } from  "./toggleButton";
import { Image, ImageOptions } from "../image/image";

export class ImageToggleButton extends FrameworkElement {
    constructor(options?: ImageToggleButtonOption) {
        super("button", "ImageButton", options);

        if (options) {
            this.imageOptions = options.imageOptions;
            this.toggleButtonOptions = options.toggleButtonOptions;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var button = new ToggleButton(this.toggleButtonOptions);
            button.content = new Image(this.imageOptions);

            this.element = button.render();
        }
    }

    imageOptions: ImageOptions;
    toggleButtonOptions: ToggleButtonOptions;
}

export interface ImageToggleButtonOption extends FrameworkElementOptions {
    imageOptions: ImageOptions;
    toggleButtonOptions: ToggleButtonOptions;
}