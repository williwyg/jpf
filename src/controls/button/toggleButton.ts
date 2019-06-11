import * as ko from "knockout";
import { Button, ButtonOptions } from "./button";
import { Style } from "../../style/style";

export interface ToggleButtonOptions extends ButtonOptions {
    styleSelected?: Style;
    selected?: boolean | KnockoutObservable<boolean>;
    selectedchanged?: (selected: boolean) => void;
}

export class ToggleButton extends Button {
    constructor(options: ToggleButtonOptions) {
        super(options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            //Store the normal style for later use
            const styleNormal = window.getComputedStyle(this.element) as any as Style;

            this.options.onclick = () => {
                var newValue = !ko.unwrap(this.options.selected);

                if (ko.isObservable(this.options.selected)) {
                    (this.options.selected as KnockoutObservable<boolean>)(newValue);
                } else {
                    this.options.selected = newValue;
                }

                if (newValue) {
                    this.deleteStyle(styleNormal);
                    this.setStyle(this.options.styleSelected);
                } else {
                    this.deleteStyle(this.options.styleSelected);
                    this.setStyle(styleNormal);
                }
                if (this.options.selectedchanged) {
                    this.options.selectedchanged(newValue);
                }
            };
        }
    }

    readonly options: ToggleButtonOptions;
}