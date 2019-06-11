import * as ko from "knockout";
import { UiElement, UiElementOptions} from "../../framework/uiElement";

export interface SpanOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}

export class Span extends UiElement {
    constructor(options: SpanOptions) {
        super("span", "Span", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var bindings = {} as any;
            if (this.options.isHtml) {
               bindings.html= this.options.text;
            }
            else {
                bindings.text = this.options.text;
            }

            ko.applyBindingsToNode(this.element, bindings);
        }
    }

    readonly options: SpanOptions;
}