import { UiElement, UiElementOptions } from "../../framework/uiElement";
import { ToggleButton, ToggleButtonOptions } from "./toggleButton";
import { Image, ImageOptions } from "../image/image";

export interface ImageToggleButtonOptions extends UiElementOptions {
    imageOptions: ImageOptions;
    toggleButtonOptions: ToggleButtonOptions;
}

export class ImageToggleButton extends UiElement {
    constructor(options?: ImageToggleButtonOptions) {
        super("button", "ImageButton", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var button = new ToggleButton(this.options.toggleButtonOptions);
            button.options.content = new Image(this.options.imageOptions);

            this.element = button.render();
        }
    }

    readonly options: ImageToggleButtonOptions;
}