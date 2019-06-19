import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";


export interface SelectBoxOptions<TItem> extends UiElementOptions {
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    itemsCaption?: string;
    itemsText?: keyof TItem;
    itemsValue?: keyof TItem;
    value?: any | KnockoutObservable<any>;
    onchange?: (value: any) => void;
}

export class SelectBox<TItem> extends UiElement {
    constructor(options?: SelectBoxOptions<TItem>) {
        super("select", "SelectBox", options);
    }

    build() {
        super.build();

        const value = ko.observable<any>(ko.unwrap(this.options.value));

        ko.applyBindingsToNode(
            this.element,
            {
                options: this.options.items,
                optionsCaption: this.options.itemsCaption,
                optionsText: this.options.itemsText,
                optionsValue: this.options.itemsValue,
                value: value
            }
        );
        
        value.subscribe((newValue: any) => {
            if (ko.isObservable(this.options.value)) {
                this.options.value(newValue);
            }

            if (this.options.onchange) {
                this.options.onchange(newValue);
            };
        });
    }

    readonly options: SelectBoxOptions<TItem>;
}