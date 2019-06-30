import * as jpf from "jpf";

export interface ImageButtonOptions extends jpf.UiElementOptions {
    imageOptions: jpf.Elements.ImageOptions;
    buttonOptions: jpf.Elements.ButtonOptions;
}

export class ImageButton extends jpf.UiElement {
    constructor(options?: ImageButtonOptions) {
        super("button", "ImageButton", options);
    }

    build () {
        super.build();

        const button = new jpf.Elements.Button(this.options.buttonOptions);
        button.options.content = new jpf.Elements.Image(this.options.imageOptions);

        this.element = button.render();
    }

    readonly options: ImageButtonOptions;
}

