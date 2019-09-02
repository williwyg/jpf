import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface SelectOptions<TItem> extends UiElementOptions {
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    itemsCaption?: string;
    itemsText?: keyof TItem;
    itemsValue?: keyof TItem;
    value?: any | KnockoutObservable<any>;
    onchange?: (value: any) => void;
}

export class Select<TItem> extends UiElement {
    constructor(options?: SelectOptions<TItem>) {
        super("select", "Select", options);
    }

    //Protected members
    protected options: SelectOptions<TItem>;
    protected build() {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                options: this.options.items,
                optionsCaption: this.options.itemsCaption,
                optionsText: this.options.itemsText,
                optionsValue: this.options.itemsValue,
                value: ko.unwrap(this.options.value)
            }
        );

        var optionsValue = this.options.value;
        if (ko.isObservable(optionsValue)) {
            optionsValue.subscribe((newValue) => {
                this.element.value = newValue;
            });
        }

        this.addEventListener("change", () => {
            if (ko.isObservable(optionsValue)) {
                optionsValue(this.element.value);
            }

            if (this.options.onchange) {
                this.options.onchange(this.element.value);
            }
        });
    }

    //Public members
    readonly element: HTMLSelectElement;
}