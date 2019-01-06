import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement/frameworkElement";

export class ComboBox<TItem, TValue> extends FrameworkElement {
    constructor(options?: ComboBoxOptions<TItem, TValue>) {
        super("select", "ComboBox", options);

        if (options) {
            this.dataTextField = options.dataTextField;
            this.selectedValue = options.selectedValue;
            this.selectedItem = options.selectedItem;
            this.items = options.items;
            this.onchange = options.onchange;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (this.selectedValue) {

            }

            ko.applyBindingsToNode(
                this.element,
                {
                    value: this.selectedItem,
                    options: this.items,
                    optionsText: this.dataTextField
                }
            );

            this.element.onchange = () => {
                const selectedItem = ko.unwrap(this.selectedItem);
                const selectedValue = this.selectedValueFunction(selectedItem);
                if (ko.isObservable(this.selectedValue)) {
                    this.selectedValue(selectedValue);
                } else {
                    this.selectedValue = selectedValue;
                }
                if (this.onchange) {
                    this.onchange(selectedItem);
                }
            }
        }
    }

    dataTextField: string;
    selectedValue: TValue| KnockoutObservable<TValue>;
    selectedValueFunction: (item: TItem) => TValue;
    selectedItem: TItem | KnockoutObservable<TItem>;
    items: Array<TItem> | KnockoutObservableArray<TItem>;
    onchange: (item: TItem) => void;
}

export interface ComboBoxOptions<TItem, TValue> extends FrameworkElementOptions {
    dataTextField?: string;
    selectedValue?: TValue| KnockoutObservable<TValue>;
    selectedValueFunction?: (item: TItem) => TValue;
    selectedItem?: TItem | KnockoutObservable<TItem>;
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    onchange?: (item: TItem) => void;
}