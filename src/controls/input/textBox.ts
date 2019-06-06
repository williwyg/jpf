import ko = require("knockout");
import { InputElement, InputElementOptions } from "../../framework/inputElement";

export interface TextBoxOptions extends InputElementOptions<string> {
    text?: string | KnockoutObservable<string>;
    valueUpdateMode?: TextBoxValueUpdateMode;
}

export type TextBoxValueUpdateMode = "OnLostFocus" | "OnKeyPress";

export class TextBox extends InputElement<string, TextBoxOptions> {
    constructor(options?: TextBoxOptions) {
        super("TextBox", options);

        this.inputType = "text";
        this.text =ko.unwrap(this.options.text);


        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            this.element.onkeypress = () => {
                if (this.options.valueUpdateMode === "OnKeyPress") {
                    this.innerSetText((this.element as HTMLInputElement).value, false, true, true);
                }
            }

            this.element.onblur = () => {
                if (this.options.valueUpdateMode === "OnLostFocus") {
                    this.innerSetText((this.element as HTMLInputElement).value, false, true, true);
                }
            }

            if (ko.isObservable(options.text)) {
                options.text.subscribe((newValue: string) => {
                    this.innerSetText(newValue, true, false, false);
                });
            }
        }
    }

    private text: string;
    private innerSetText (text: string, setElement: boolean, triggerOnchange: boolean, setObservable: boolean) {
        //Find out if the validateInput method is implemented and if the given text is valid
        if (this.validateInput && !this.validateInput(text)) {
            if (this.element) {
                //Revert the change
                (this.element as HTMLInputElement).value = this.text;
            }

            return;
        }

        this.text = text;

        if (setElement && this.element) {
            (this.element as HTMLInputElement).value = text;
        }

        if (triggerOnchange && this.onchange) {
            this.onchange(text);
        }

        if (setObservable && ko.isObservable(this.options.text)) {
            (this.options.text as KnockoutObservable<string>)(text);
        }
    }

    getText() {
        return this.text;
    }

    setText(text: string, triggerChange: boolean = false) {
        this.innerSetText(text, true, triggerChange, false);
    }

    readonly options: TextBoxOptions;
}