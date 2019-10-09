import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface DivOptions<TChild extends UiElement> extends UiElementOptions<TChild> {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Div<TChild extends UiElement<TChild>> extends UiElement<TChild> {
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

    protected options: DivOptions<TChild>;
}