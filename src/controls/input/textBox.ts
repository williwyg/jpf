import { InputElement, InputElementOptions } from "../../framework/index";

export class TextBox extends InputElement<string> {
    constructor(options?: TextBoxOptions) {
        super("TextBox", options);

        if (options) {
            this.text = options.text;
            if (options.valueUpdateMode) {
                this.valueUpdateMode = options.valueUpdateMode;
            }
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            const innerText = ko.observable<string>(ko.unwrap(this.text));

            ko.applyBindingsToNode(this.element, { textInput: innerText });

            const setText = (text: string) => {
                if (ko.isObservable(this.text)) {
                    this.text(text);
                } else {
                    this.text = text;
                }

                if (this.onchange) {
                    this.onchange(text);
                }
            }

            innerText.subscribe((newValue: string) => {
                if (this.valueUpdateMode === "OnKeyPress") {
                    setText(newValue);
                }
            });

            this.element.onblur = () => {
                if (this.valueUpdateMode === "OnLostFocus") {
                   setText(innerText());
                }
            }
        }
    }

    text: string | KnockoutObservable<string>;
    valueUpdateMode: TextBoxValueUpdateMode = "OnLostFocus";
}

export interface TextBoxOptions extends InputElementOptions<string> {
    text?: string | KnockoutObservable<string>;
    valueUpdateMode?: TextBoxValueUpdateMode;
}

export type TextBoxValueUpdateMode = "OnLostFocus" | "OnKeyPress";