import ko = require("knockout");
import { FrameworkElement, FrameworkElementOptions } from "./frameworkElement";

export abstract class ItemsElement<TItem extends FrameworkElement> extends FrameworkElement {
    protected constructor(tagName: string, type: string, options?: ItemsElementOptions<TItem>) {
        super(tagName, type, options);
        if (options) {
            this.items = options.items;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            //Make sure the items are rerendered when the items collection changes.
            if (ko.isObservable(this.items)) {
                this.items.subscribe(() => {
                    this.renderItems();
                });
            }

            this.renderItems();
        }
    }

    private renderItems = (): void => {
        if (this.element) {
            //Remove all exiting children
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }

            const documentFragment = document.createDocumentFragment();
            for (let item of this.items) {
                documentFragment.appendChild(item.render());
            }
            this.element.appendChild(documentFragment);
        }
    }


    private items: Array<TItem> = [];

    getItems = () => {
        return this.items;
    }

    setItems = (items: Array<TItem>): void => {
        this.items = items;
        this.renderItems();
    }

    insertItem = (newItem: TItem, referenceItem?: TItem): void => {
        if (referenceItem) {
            //Find the index of the referenceItem
            const index = this.items.indexOf(referenceItem);
            if (index > -1) {
                this.items.splice(index, 0, newItem);
                if (this.element && referenceItem.element) {
                    this.element.insertBefore(newItem.render(), referenceItem.element);
                }
            }
        } else {
            this.items.push(newItem);
            if (this.element) {
                this.element.appendChild(newItem.render());
            }
        }
    }

    removeItem = (itemToRemove: TItem): void => {
        const index = this.items.indexOf(itemToRemove);
        if (index > -1) {
            this.items.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }
}

export interface ItemsElementOptions<TItem extends FrameworkElement> extends FrameworkElementOptions {
    items?: Array<TItem>
}