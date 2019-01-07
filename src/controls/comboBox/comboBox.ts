import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement/frameworkElement";

export class ComboBox<TItem> extends FrameworkElement {
    constructor(options?: ComboBoxOptions<TItem>) {
        super("select", "ComboBox", options);

        if (options) {
            this.dataTextField = options.dataTextField;
            this.selectedValue = options.selectedValue;
            this.selectedValueFunction = options.selectedValueFunction;
            this.selectedItem = options.selectedItem;
            this.items = options.items;
            this.onchange = options.onchange;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (ko.unwrap(this.selectedItem)) {
                if (this.selectedValueFunction && !this.selectedValue) {
                    this.selectedValue = this.selectedValueFunction(ko.unwrap(this.selectedItem));
                }
            }

            var items = ko.unwrap(this.items);
            if (items) {
                //If the selectedValue is given but not the selectedItem. We try to find the selectedItem
                if (ko.unwrap(this.selectedValue)) {
                    if (this.selectedValueFunction && !this.selectedItem) {
                        this.selectedItem = ko.utils.arrayFirst(
                            items,
                            (item: TItem) => {
                                return this.selectedValueFunction(item) === ko.unwrap(this.selectedValue);
                            }
                        );
                    }
                }

                //Add the options
                items.forEach((item: TItem, index: number) => {
                    const option = document.createElement("option");
                    option.text = item[this.dataTextField];
                    if (this.selectedValueFunction) {
                        const value = this.selectedValueFunction(item);
                        option.value = value + "";
                        if (value === this.selectedValue) {
                            option.selected = true;
                        }

                    }

                    this.element.appendChild(option);
                });
            }

            this.element.onchange = () => {
                var input = this.element as HTMLInputElement;
                if (ko.isObservable(this.selectedValue)) {
                    this.selectedValue(input.value as any);
                } else {
                    this.selectedValue = input.value;
                }

                const items = ko.unwrap(this.items);
                if (items && this.selectedValueFunction) {
                    const selectedItem = ko.utils.arrayFirst(items,
                        (item) => {
                            return this.selectedValueFunction(item) === this.selectedValue;
                        }
                    );

                    if (ko.isObservable(this.selectedItem)) {
                        this.selectedItem(selectedItem);
                    } else {
                        this.selectedItem = selectedItem;
                    }
                    if (this.onchange) {
                        this.onchange(selectedItem);
                    }
                }
            }
        }
    }

    dataTextField: string;
    selectedValue: string | KnockoutObservable<string>;
    selectedValueFunction: (item: TItem) => string;
    selectedItem: TItem | KnockoutObservable<TItem>;
    items: Array<TItem> | KnockoutObservableArray<TItem>;
    onchange: (item: TItem) => void;
}

export interface ComboBoxOptions<TItem> extends FrameworkElementOptions {
    dataTextField?: string;
    selectedValue?: string | KnockoutObservable<string>;
    selectedValueFunction?: (item: TItem) => string;
    selectedItem?: TItem | KnockoutObservable<TItem>;
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    onchange?: (item: TItem) => void;
}