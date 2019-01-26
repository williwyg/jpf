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

        if (options) {
            this.label = new Label(options.labelOptions);
        } else {
            this.label = new Label();
        }

        const buildSuper = this.build;
        this.build = () => {
            this.setChildren([this.label, this.control]);

            buildSuper();
        }
    }

    label: Label;
    control: UiElement;
}