import ko = require("knockout");
import { UiElement, UiElementOptions} from "../../framework/uiElement";

export interface HyperlinkOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}

export class Hyperlink extends UiElement {
    constructor(options?: HyperlinkOptions) {
        super("a", "Hyperlink", options);

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            ko.applyBindingsToNode(
                this.element,
                {
                    text: this.options.text,
                    attr: {
                        href: this.options.href
                    }
                }
            );
        }
    }

    readonly options: HyperlinkOptions;
}