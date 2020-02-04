import ko = require("knockout");
import { InputElement, InputElementOptions } from "../inputElement";

export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean | KnockoutObservable<boolean>;
    scale?: number;
}

export class CheckBox extends InputElement<boolean, CheckBoxOptions> {
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

    //Private members
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

    //Protected members
    protected build() {
        super.build();

        if (this.options.scale) {
            const scale = "scale(" + this.options.scale + ")";
            this.setStyle({
                transform: scale,
                webKitTransform: scale,
                msTransform: scale
            });
        }

        //Set the initial value of the checkbox
        this.setChecked(this.innerChecked,false);

        this.addEventListener(
            "change",
            () => {
                this.innerSetChecked(this.element.checked, false, true, true);
            }
        );
    }

    //Public members
    getChecked() {
        return this.innerChecked;
    }

    setChecked(checked: boolean, triggerChange: boolean = false) {
        this.innerSetChecked(checked, true, triggerChange, true);
    }
}