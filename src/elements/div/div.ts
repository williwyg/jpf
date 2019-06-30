import * as ko from "knockout";
import { UiElement } from "../../framework/uiElement";
import { UiChildrensElement, UiChildrensElementOptions } from "../../framework/uiChildrensElement";

export interface DivOptions<TChild extends UiElement> extends UiChildrensElementOptions<TChild> {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Div<TChild extends UiElement> extends UiChildrensElement<TChild> {
    constructor(options?: DivOptions<TChild>) {
        super("div", "Div", options);
    }

    build() {
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

    readonly options: DivOptions<TChild>;
}