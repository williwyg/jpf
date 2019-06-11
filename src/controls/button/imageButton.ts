import { UiElement, UiElementOptions } from "../../framework/uiElement";
import { Button, ButtonOptions } from "./button";
import { Image, ImageOptions } from "../image/image";

export interface ImageButtonOptions extends UiElementOptions {
    imageOptions: ImageOptions;
    buttonOptions: ButtonOptions;
}

export class ImageButton extends UiElement {
    constructor(options?: ImageButtonOptions) {
        super("button", "ImageButton", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var button = new Button(this.options.buttonOptions);
            button.options.content = new Image(this.options.imageOptions);

            this.element = button.render();
        }
    }

    readonly options: ImageButtonOptions;
}

