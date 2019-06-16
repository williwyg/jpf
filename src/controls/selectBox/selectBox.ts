import ko = require("knockout");
import { UiElement, UiElementOptions} from "../../framework/uiElement";


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

    build () {
        super.build();

        let value: KnockoutObservable<any>;
        if (ko.isObservable(this.options.value)) {
            value = this.options.value;
        } else {
            value = ko.observable<any>(this.options.value);
        }
        value.subscribe((newValue: any) => {
            if (this.options.onchange) {
                this.options.onchange(newValue);
            }
        });

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
    }

    readonly  options: SelectBoxOptions<TItem>;
}