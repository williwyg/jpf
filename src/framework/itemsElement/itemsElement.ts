﻿import * as ko from "knockout";
import { FrameworkElement, FrameworkElementOptions } from "../frameworkElement/frameworkElement";


export abstract class ItemsElement extends FrameworkElement {
    protected constructor(tagName: string, type: string, options?: ItemsElementOptions) {
        super(tagName, type, options);
        if (options) {
            this.items = options.items;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            this.renderItems();
        }


    }

    items: Array<FrameworkElement> | KnockoutObservableArray<FrameworkElement> = [];

    insertItem(newItem: FrameworkElement, referenceItem?: FrameworkElement) {
        const items = ko.unwrap(this.items);
        if (referenceItem) {
            //Find the index of the referenceItem
            const index = items.indexOf(referenceItem);
            if (index > -1) {
                items.splice(index, 0, newItem);
                if (this.element && referenceItem.element) {
                    this.element.insertBefore(newItem.render(), referenceItem.element);
                }
            }
        } else {
            items.push(newItem);
            if (this.element) {
                this.element.appendChild(newItem.render());
            }
        }
    }

    renderItems() {
        if (this.element) {
            //Remove all exiting children
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }

            const items = ko.unwrap(this.items);
            const documentFragment = document.createDocumentFragment();
            for (let item of items) {
                documentFragment.appendChild(item.render());
            }
            this.element.appendChild(documentFragment);
        }
    }

    removeItem(itemToRemove: FrameworkElement) {
        const items = ko.unwrap(this.items);
        const index = items.indexOf(itemToRemove);
        if (index > -1) {
            items.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }

    setItems(items: Array<FrameworkElement>) {
        if (ko.isObservable(this.items)) {
            this.items(items);
        } else {
            this.items = items;
            this.renderItems();
        }
    }
}

export interface ItemsElementOptions extends FrameworkElementOptions {
    items?: Array<FrameworkElement> | KnockoutObservableArray<FrameworkElement>;
}