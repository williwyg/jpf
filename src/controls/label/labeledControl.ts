import { Label, LabelOptions } from "./label";
import { FrameworkElement } from "../../framework/frameworkElement";
import { StackPanel, StackPanelOptions } from "../panel/stackPanel";

export class LabeledControl extends StackPanel<FrameworkElement> {
    constructor(options?: LabeledControlOptions) {
        super(options);

        if (options) {
            this.label = new Label(options.labelOptions);
        } else {
            this.label = new Label();
        }

        const buildSuper = this.build;
        this.build = () => {
            this.setItems([this.label, this.control]);

            buildSuper();
        }
    }

    label: Label;
    control: FrameworkElement;
}

export interface LabeledControlOptions extends StackPanelOptions<FrameworkElement> {
    labelOptions: LabelOptions;
    control: FrameworkElement;
}
