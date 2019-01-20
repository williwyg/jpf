import { Button, ButtonOptions } from "./button";
import { Style } from "../../style/style";

export class ToggleButton extends Button {
    constructor(options: ToggleButtonOptions) {
        super(options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            //Store the normal style for later use
            this.styleNormal = window.getComputedStyle(this.element) as any as Style;

            this.onclick = () => {
                var newValue = !ko.unwrap(this.selected);

                if (ko.isObservable(this.selected)) {
                    this.selected(newValue);
                } else {
                    this.selected = newValue;
                }

                if (newValue) {
                    this.deleteStyle(this.styleNormal);
                    this.setStyle(this.styleSelected);
                } else {
                    this.deleteStyle(this.styleSelected);
                    this.setStyle(this.styleNormal);
                }
                if (this.selectedchanged) {
                    this.selectedchanged(newValue);
                }
            };
        }
    }

    private styleNormal: Style;
    styleSelected: Style;
    selected: boolean | KnockoutObservable<boolean>;
    selectedchanged: (selected: boolean)=>void;
}

export interface ToggleButtonOptions extends ButtonOptions {
    styleSelected?: Style;
    selected?: boolean | KnockoutObservable<boolean>;
    selectedchanged? : (selected: boolean) =>void;
}