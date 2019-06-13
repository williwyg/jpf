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
    }

    build() {
        super.build();

        const toggleButton = new ToggleButton(this.options.toggleButtonOptions);
        toggleButton.options.content = new Image(this.options.imageOptions);

        this.element = toggleButton.render();
    }

    readonly options: ImageToggleButtonOptions;
}