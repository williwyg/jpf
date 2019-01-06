import { Label, LabelOptions } from "./label";
import { FrameworkElement } from "../../framework/frameworkElement/frameworkElement";
import { StackPanel, StackPanelOptions } from "../panel/stackPanel";

export class LabeledControl extends StackPanel {
    constructor(options?: LabeledControlOptions) {
        super(options);

        if (options) {
            this.label = new Label(options.labelOptions);
        } else {
            this.label = new Label();
        }

        const buildSuper = this.build;
        this.build = () => {
            this.items = [this.label, this.control];

            buildSuper();
        }
    }

    label: Label;
    control: FrameworkElement;
}

export interface LabeledControlOptions extends StackPanelOptions {
    labelOptions: LabelOptions;
    control: FrameworkElement;
}
