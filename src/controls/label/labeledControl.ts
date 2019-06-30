import * as jpf from "jpf";

export interface LabeledControlOptions extends jpf.Elements.StackPanelOptions< jpf.UiElement> {
    labelOptions:jpf.Elements.LabelOptions;
    control:jpf.UiElement;
}

export class LabeledControl extends jpf.Elements.StackPanel<jpf.UiElement> {
    constructor(options?: LabeledControlOptions) {
        super(options);
    }

    build() {
        this.label = new jpf.Elements.Label(this.options.labelOptions);

        if (!this.options.style.alignItems) {
            this.setStyle({ alignItems: "baseline" });
        }

        this.setChildren([this.label, this.options.control]);

        super.build();
    }

    protected label: jpf.Elements.Label;
    readonly options: LabeledControlOptions;
}