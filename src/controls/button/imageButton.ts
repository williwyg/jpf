import { UiElement, UiElementOptions } from "../../framework/uiElement";
import { Button, ButtonOptions } from "./button";
import { Image, ImageOptions } from "../image/image";

export interface ImageButtonOption extends UiElementOptions {
    imageOptions: ImageOptions;
    buttonOptions: ButtonOptions;
}

export class ImageButton extends UiElement {
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

