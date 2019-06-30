import * as ko from "knockout";
import { InputElement, InputElementOptions, InputElementType } from "../../../framework/inputElement";

export interface NumberOptions extends InputElementOptions<number> {
    value?: number | KnockoutObservable<number>;
    valueUpdateMode?: NumberValueUpdateMode;
}

export type NumberValueUpdateMode = "OnInput" | "OnChange";

export class Number extends InputElement<number> {
    constructor(options?: NumberOptions, elementType: string = "InputNumber", inputElementType: InputElementType = "number") {
        super(elementType, inputElementType, options);
    }

    build() {
        super.build();

        if (this.options.valueUpdateMode === "OnInput") {
            this.element.addEventListener(
                "input",
                () => {
                    if (this.element.checkValidity()) {
                        this.innerSetValue(parseFloat(this.element.value), false, true, true);
                    }

                });
        } else {
            this.element.addEventListener(
                "change",
                () => {
                    if (this.element.checkValidity()) {
                        this.innerSetValue(parseFloat(this.element.value), false, true, true);
                    }
                });
        }

        const value = this.options.value;

        this.innerValue = ko.unwrap(value);
        if (this.innerValue) {
            this.element.value = this.innerValue.toString();
        }

        if (ko.isObservable(value)) {
            value.subscribe((newValue: number) => {
                this.innerSetValue(newValue, true, false, false);
            });
        }
    }

    private innerValue: number;
    private innerSetValue(value: number, setElement: boolean, triggerOnchange: boolean, setObservable: boolean) {
        if (this.options.checkValidity && !this.options.checkValidity(this.innerValue, value)) {
            value = this.innerValue;
            setElement = true;
            triggerOnchange = false;
        }
        this.innerValue = value;

        if (setElement && this.element) {
            (this.element as HTMLInputElement).value = value.toString();
        }

        if (triggerOnchange && this.options.onchange) {
            this.options.onchange(value);
        }

        if (setObservable) {
            const optionsValue = this.options.value;
            if (ko.isObservable(optionsValue)) {
                optionsValue(value);
            }
        }
    }

    getValue() {
        return this.innerValue;
    }

    setValue(value: number, triggerChange: boolean = false) {
        this.innerSetValue(value, true, triggerChange, true);
    }

    readonly options: NumberOptions;
}