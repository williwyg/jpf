import * as ko from "knockout";
import * as jpf from "jpf";

export interface ToggleButtonOptions extends jpf.Elements.ButtonOptions {
    styleSelected?: jpf.Style;
    selected?: boolean | KnockoutObservable<boolean>;
    selectedchanged?: (selected: boolean) => void;
}

export class ToggleButton extends jpf.Elements.Button {
    constructor(options: ToggleButtonOptions) {
        super(options);
    }

    build() {
        super.build();

        //Store the normal style for later use
        const styleNormal = window.getComputedStyle(this.element) as any as jpf.Style;
        this.options.eventListeners = [
            new jpf.EventListener("click", () => {
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
            })
        ];
    }

    readonly options: ToggleButtonOptions;
}