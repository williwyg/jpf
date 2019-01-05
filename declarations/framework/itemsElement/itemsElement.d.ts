/// <reference types="knockout" />
import { FrameworkElement, FrameworkElementOptions } from "../frameworkElement/frameworkElement";
export declare abstract class ItemsElement extends FrameworkElement {
    protected constructor(tagName: string, type: string, options?: ItemsElementOptions);
    items: Array<FrameworkElement> | KnockoutObservableArray<FrameworkElement>;
    insertItem(newItem: FrameworkElement, referenceItem?: FrameworkElement): void;
    renderItems(): void;
    removeItem(itemToRemove: FrameworkElement): void;
    setItems(items: Array<FrameworkElement>): void;
}
export interface ItemsElementOptions extends FrameworkElementOptions {
    items?: Array<FrameworkElement> | KnockoutObservableArray<FrameworkElement>;
}
