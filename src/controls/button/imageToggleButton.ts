import { UiElement, UiElementOptions } from "../../framework/uiElement";
import { ToggleButton, ToggleButtonOptions } from  "./toggleButton";
import { Image, ImageOptions } from "../image/image";

export interface ImageToggleButtonOption extends UiElementOptions {
    imageOptions: ImageOptions;
    toggleButtonOptions: ToggleButtonOptions;
}

export class ImageToggleButton extends UiElement {
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