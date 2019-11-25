import * as ko from "knockout";
import { UiElement } from "../../framework/uiElement";
import { ChildrensUiElement, ChildrensUiElementOptions} from "../../framework/childrensUiElement";

export interface DivOptions<TChild extends UiElement = UiElement> extends ChildrensUiElementOptions<TChild> {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Div<TChild extends UiElement = UiElement> extends ChildrensUiElement<TChild> {
    constructor(options?: DivOptions<TChild>) {
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

    protected readonly options: DivOptions<TChild>;
}