import * as ko from "knockout";
import { InputElement, InputElementOptions, InputElementType } from "../../../framework/inputElement";

export interface TextOptions extends InputElementOptions<string> {
    text?: string | KnockoutObservable<string>;
    valueUpdateMode?: TextValueUpdateMode;
}

export type TextValueUpdateMode = "OnInput" | "OnChange";

export class Text extends InputElement<string> {
    constructor(options?: TextOptions, elementType: string = "InputText", inputElementType: InputElementType = "text") {
        super(elementType, inputElementType, options);
    }

    build() {
        super.build();

        if (this.options.valueUpdateMode === "OnInput") {
            this.element.addEventListener(
                "input",
                () => {
                    this.innerSetText(this.element.value, false, true, true);
                });
        } else {
            this.element.addEventListener(
                "change",
                () => {
                    this.innerSetText(this.element.value, false, true, true);
                });
        }

        const text = this.options.text;

        this.innerText = ko.unwrap(text);
        if (this.innerText) {
            this.element.value = this.innerText;
        }

        if (ko.isObservable(text)) {
            text.subscribe((newValue: string) => {
                this.innerSetText(newValue, true, false, false);
            });
        }
    }

    private innerText: string;
    private innerSetText(text: string, setElement: boolean, triggerOnchange: boolean, setObservable: boolean) {
        if (this.options.checkValidity && !this.options.checkValidity(this.innerText, text)) {
            text = this.innerText;
            setElement = true;
            triggerOnchange = false;
        }
        this.innerText = text;

        if (setElement && this.element) {
            (this.element as HTMLInputElement).value = text;
        }

        if (triggerOnchange && this.options.onchange) {
            this.options.onchange(text);
        }

        if (setObservable) {
            const optionsText = this.options.text;
            if (ko.isObservable(optionsText)) {
                optionsText(text);
            }
        }
    }

    getText() {
        return this.innerText;
    }

    setText(text: string, triggerChange: boolean = false) {
        this.innerSetText(text, true, triggerChange, true);
    }

    readonly options: TextOptions;
}