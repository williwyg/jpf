import { Label, LabelOptions } from "../label/label";
import { FrameworkElement } from "../../framework/frameworkElement/frameworkElement";
import { StackPanel, StackPanelOptions } from "../panel/stackPanel";
export declare class LabeledControl extends StackPanel {
    constructor(options?: LabeledControlOptions);
    label: Label;
    control: FrameworkElement;
}
export interface LabeledControlOptions extends StackPanelOptions {
    labelOptions: LabelOptions;
    control: FrameworkElement;
}
