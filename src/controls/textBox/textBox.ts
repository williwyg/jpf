import { InputElement, InputElementOptions} from "../../framework/index";

export class TextBox extends InputElement {
    constructor(options?: TextBoxOptions) {
        super("TextBox", options);

        if (options) {
            this.text = options.text;
            this.for = options.for;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var input = this.element as HTMLInputElement;
            input.type = "text";

            ko.applyBindingsToNode(
                this.element,
                {
                    html: this.text,
                    attr: {
                        for: this.for
                    }
                }
            );
        }
    }

    text: string | KnockoutObservable<string>;
    for: string;
}

export interface TextBoxOptions extends InputElementOptions {
    text?: string | KnockoutObservable<string>;
    for?: string;
}