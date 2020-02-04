import * as ko from "knockout";
import { UiElement , UiElementOptions} from "../../framework/uiElement";

export interface DivOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Div extends UiElement<DivOptions> {
    constructor(options?: DivOptions) {
        super("div", "Div", options);
    }

    protected build() {
        super.build();

        if (this.options.text) {
            if (this.options.isHtml) {
                ko.applyBindingsToNode(this.element, { html: this.options.text });
            }
            else {
                ko.applyBindingsToNode(this.element, { text: this.options.text });
            }
        }
    }
}