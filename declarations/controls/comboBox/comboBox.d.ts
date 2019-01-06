/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement/frameworkElement";
export declare class ComboBox<TItem, TValue> extends FrameworkElement {
    constructor(options?: ComboBoxOptions<TItem, TValue>);
    dataTextField: string;
    selectedValue: TValue | KnockoutObservable<TValue>;
    selectedValueFunction: (item: TItem) => TValue;
    selectedItem: TItem | KnockoutObservable<TItem>;
    items: Array<TItem> | KnockoutObservableArray<TItem>;
    onchange: (item: TItem) => void;
}
export interface ComboBoxOptions<TItem, TValue> extends FrameworkElementOptions {
    dataTextField?: string;
    selectedValue?: TValue | KnockoutObservable<TValue>;
    selectedValueFunction?: (item: TItem) => TValue;
    selectedItem?: TItem | KnockoutObservable<TItem>;
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    onchange?: (item: TItem) => void;
}
