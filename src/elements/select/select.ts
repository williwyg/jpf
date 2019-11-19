import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface SelectOptions<TItem, TValue> extends UiElementOptions {
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    textFunction?: (item: TItem) => string;
    valueFunction?: (item: TItem) => TValue;
    selectedValue?: TValue | KnockoutObservable<TValue>;
    onchange?: (value: TValue) => void;
}

export class Select<TItem, TValue> extends UiElement {
    constructor(options?: SelectOptions<TItem, TValue>) {
        super("select", "Select", options);
    }

    //Protected members
    protected readonly options: SelectOptions<TItem, TValue>;
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

        var optionsValue = this.options.selectedValue;
        if (ko.isObservable(optionsValue)) {
            optionsValue.subscribe((newValue) => {
                this.element.value = newValue as any;
            });
        }

        this.addEventListener("change", () => {
            if (ko.isObservable(optionsValue)) {
                optionsValue(this.element.value);
            }

            if (this.options.onchange) {
                this.options.onchange(this.element.value as any as TValue);
            }
        });
    }

    //Public members
    readonly element: HTMLSelectElement;
}