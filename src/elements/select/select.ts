import ko = require("knockout");
import { UiElement, UiElementOptions } from "../../framework/uiElement";

export interface SelectOptions<TItem, TValue> extends UiElementOptions {
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    textFunction?: (item: TItem) => string;
    valueFunction?: (item: TItem) => TValue;
    selectedValue?: TValue | KnockoutObservable<TValue>;
    onchange?: (value: TValue) => void;
}

export class Select<TItem, TValue> extends UiElement<SelectOptions<TItem, TValue>> {
    constructor(options?: SelectOptions<TItem, TValue>) {
        super("select", "Select", options);
    }

    //Protected members
    protected build() {
        super.build();

        const items = ko.unwrap(this.options.items);
        for (let  item of items) {
            const option = document.createElement("option");
            const value = this.options.valueFunction(item);
            if (value) {
                option.value = value.toString();
            }
            option.text = this.options.textFunction(item);
            this.element.appendChild(option);
        }

        var optionsValue = this.options.selectedValue;
        if (ko.isObservable(optionsValue)) {
            optionsValue.subscribe((newValue) => {
                this.element.value = newValue as any;
            });
        }

        this.addEventListener("change", () => {
            var selectedItem = this.options.items[this.element.selectedIndex];
            var selectedValue = this.options.valueFunction(selectedItem);
            if (ko.isObservable(optionsValue)) {
                optionsValue(selectedValue);
            }

            if (this.options.onchange) {
                this.options.onchange(selectedValue);
            }
        });
    }

    //Public members
    readonly element: HTMLSelectElement;
}