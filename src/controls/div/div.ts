import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";
import { UiChildrensElement, UiChildrensElementOptions } from "../../framework/uiChildrensElement";

export interface DivOptions<TChild extends UiElement<UiElementOptions>> extends UiChildrensElementOptions<TChild> {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Div<TChild extends UiElement<UiElementOptions>> extends UiChildrensElement<TChild> {
    constructor(options?: DivOptions<TChild>) {
        super("div", "Div", options);

        const superBuild = this.build;
        this.build = () => {
            superBuild();

            if (this.text) {
                if (this.isHtml) {
                    ko.applyBindingsToNode(this.element, { html: this.text });
                }
                else {
                    ko.applyBindingsToNode(this.element, { text: this.text });
                }
            }
        }
    }
}