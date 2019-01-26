import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface ISpanOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Span extends UiElement {
    constructor(options: ISpanOptions) {
        super("span", "Span", options);
        const self = this;

        if (options) {
            self.text = options.text;
            if (options.isHtml || options.isHtml === false) {
                self.isHtml = options.isHtml;
            }
        }

        const buildSuper = self.build;
        self.build = () => {
            buildSuper();

            var bindings = {} as any;
            if (self.isHtml) {
               bindings.html= this.text;
            }
            else {
                bindings.text = this.text;
            }

            ko.applyBindingsToNode(this.element, bindings);
        }
    }

    text: string| KnockoutObservable<string>;
    isHtml: boolean = false;
}