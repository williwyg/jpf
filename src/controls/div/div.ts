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

        if (options) {
            this.text = options.text;
            if (options.isHtml || options.isHtml === false) {
                this.isHtml = options.isHtml;
            }
        }

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

    text: string | KnockoutObservable<string>;
    isHtml: boolean = false;
}