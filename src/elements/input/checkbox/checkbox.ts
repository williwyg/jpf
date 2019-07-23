import ko = require("knockout");
import { InputElement, InputElementOptions } from "../inputElement";

export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean | KnockoutObservable<boolean>;
    scale?: number;
}

export class CheckBox extends InputElement<boolean> {
    constructor(options?: CheckBoxOptions) {
        super("CheckBox", "checkbox", options);

        const optionsChecked = this.options.checked;

        this.innerChecked = ko.unwrap(optionsChecked);
        if (ko.isObservable(optionsChecked)) {
            this.addSubscription(
                optionsChecked,
                (newValue: boolean) => {
                    this.innerSetChecked(newValue, true, false, false);
                }
            );
        }
    }

    build() {
        super.build();

        if (this.options.scale) {
            const scale = "scale(" + this.options.scale + ")";
            this.setStyle({
                transform: scale,
                WebKitTransform: scale,
                msTransform: scale
            });
        }

        this.addEventListener(
            "change",
            () => {
                this.innerSetChecked(this.element.checked, false, true, true);
            }
        );
    }

    private innerChecked: boolean;
    private innerSetChecked(checked: boolean, setElement: boolean, triggerOnchange: boolean, setObservable: boolean) {

        this.innerChecked = checked;

        if (setElement && this.element) {
            (this.element as HTMLInputElement).checked = checked;
        }

        if (triggerOnchange && this.options.onchange) {
            this.options.onchange(checked);
        }

        if (setObservable) {
            const optionsChecked = this.options.checked;
            if (ko.isObservable(optionsChecked)) {
                optionsChecked(checked);
            }
        }
    }

    getChecked() {
        return this.innerChecked;
    }

    setChecked(checked: boolean, triggerChange: boolean = false) {
        this.innerSetChecked(checked, true, triggerChange, true);
    }

    readonly options: CheckBoxOptions;
}