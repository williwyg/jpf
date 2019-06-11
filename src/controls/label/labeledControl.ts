import { Label, LabelOptions } from "./label";
import { UiElement } from "../../framework/uiElement";
import { StackPanel, StackPanelOptions } from "../panel/stackPanel";

export interface LabeledControlOptions extends StackPanelOptions<UiElement> {
    labelOptions: LabelOptions;
    control: UiElement;
}

export class LabeledControl extends StackPanel<UiElement> {
    constructor(options?: LabeledControlOptions) {
        super(options);

        const buildSuper = this.build;
        this.build = () => {
            this.label = new Label(options.labelOptions);

            if (!this.options.style.alignItems) {
                this.setStyle({ alignItems: "baseline" });
            }

            this.setChildren([this.label, this.options.control]);

            buildSuper();
        }
    }

    label: Label;
    readonly options: LabeledControlOptions;
}