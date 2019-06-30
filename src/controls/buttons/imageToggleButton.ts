import * as jpf from "jpf";
import { ToggleButton, ToggleButtonOptions } from "./toggleButton";

export interface ImageToggleButtonOptions extends jpf. UiElementOptions {
    imageOptions: jpf.Elements.ImageOptions;
    toggleButtonOptions: ToggleButtonOptions;
}

export class ImageToggleButton extends jpf.UiElement {
    constructor(options?: ImageToggleButtonOptions) {
        super("button", "ImageButton", options);
    }

    build() {
        super.build();

        const toggleButton = new ToggleButton(this.options.toggleButtonOptions);
        toggleButton.options.content = new jpf.Elements.Image(this.options.imageOptions);

        this.element = toggleButton.render();
    }

    readonly options: ImageToggleButtonOptions;
}