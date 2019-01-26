import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";


export interface SelectOptions<TItem> extends UiElementOptions {
    options?: Array<TItem> | KnockoutObservableArray<TItem>;
    optionsCaption?: string;
    optionsText?: keyof TItem;
    optionsValue?: keyof TItem;
    value?: any | KnockoutObservable<any>;

    onchange?: (value: any) => void;
}

export class SelectBox<TItem> extends UiElement {
    constructor(options?: SelectOptions<TItem>) {
        super("select", "SelectBox", options);

        if (options) {
            this.options = options.options;
            this.optionsCaption = options.optionsCaption;
            this.optionsText = options.optionsText;
            this.optionsValue = options.optionsValue;
            this.value = options.value;

            this.onchange = options.onchange;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            let value: KnockoutObservable<any>;
            if (ko.isObservable(this.value)) {
                value = this.value;
            } else {
                value = ko.observable<any>(this.value);
            }
            value.subscribe((newValue: any) => {
                if (this.onchange) {
                    this.onchange(newValue);
                }
            });

            ko.applyBindingsToNode(
                this.element,
                {
                    options: this.options,
                    optionsCaption: this.optionsCaption,
                    optionsText: this.optionsText,
                    optionsValue: this.optionsValue,
                    value: value
                }
            );
        }
    }

    options: Array<TItem> | KnockoutObservableArray<TItem>;
    optionsCaption: string;
    optionsText: keyof TItem;
    optionsValue: keyof TItem;
    value: any | KnockoutObservable<any>;
    onchange: (value: any) => void;
}