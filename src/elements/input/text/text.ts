import * as ko from "knockout";
import { InputElement, InputElementOptions, InputElementValidityCheckOptions, InputElementType } from "../inputElement";

export interface TextOptions extends InputElementOptions<string>, InputElementValidityCheckOptions<string> {
    text?: string | KnockoutObservable<string>;
    valueUpdateMode?: TextValueUpdateMode;
}

export type TextValueUpdateMode = "OnInput" | "OnChange";

export class Text extends InputElement<string, TextOptions> {
    constructor(options?: TextOptions, elementType: string = "InputText", inputElementType: InputElementType = "text") {
        super(elementType, inputElementType, options);

        const optionsText = this.options.text;

        this.internalText = ko.unwrap(optionsText);
        if (ko.isObservable(optionsText)) {
            optionsText.subscribe((newValue: string) => {
                this.innerSetText(newValue, true, false, false);
            });
        }
    }
    //#region Private members
    private internalText: string;
    private innerSetText(text: string, setElement: boolean, triggerOnchange: boolean, setObservable: boolean) {
        if (this.options.checkValidity && !this.options.checkValidity(this.internalText, text)) {
            text = this.internalText;
            setElement = true;
            triggerOnchange = false;
        }
        this.internalText = text;

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
    //#endregion Private members

    //#region Protected members
    protected build() {
        super.build();

        if (this.internalText) {
            this.element.value = this.internalText;
        }

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
    }
    //#endregion Protected members

    //#region Public members
    getText() {
        return this.internalText;
    }

    setText(text: string, triggerChange: boolean = false) {
        this.innerSetText(text, true, triggerChange, true);
    }
    //#endregion Public members
}