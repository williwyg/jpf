import ko = require("knockout");
import { UiElement, UiElementOptions } from "./uiElement";

export interface UiChildrensElementOptions<TChild extends UiElement> extends UiElementOptions {
    children?: Array<TChild>
}

export abstract class UiChildrensElement<TChild extends UiElement> extends UiElement {
    protected constructor(tagName: string, type: string, options?: UiChildrensElementOptions<TChild>) {
        super(tagName, type, options);
    }

    private renderItems(): void {
        if (this.element) {
            //Remove all exiting children
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }

            //Create a documentFragment to reduce browser repaints
            const documentFragment = document.createDocumentFragment();
            for (let child of this.options.children) {
                documentFragment.appendChild(child.render());
            }

            //Add the documentFragment to the dom
            this.element.appendChild(documentFragment);
        }
    }

    build(): void {
        super.build();

        if (!this.options.children) {
            this.options.children = [];
        }

        //Make sure the items are rerendered when the items collection changes.
        const children = this.options.children;
        if (ko.isObservable(children)) {
            children.subscribe(() => {
                this.renderItems();
            });
        }

        this.renderItems();
    }
    
    getChildren() {
        return this.options.children;
    }

    setChildren(children: Array<TChild>): void {
        this.options.children = children;
        this.renderItems();
    }

    addChild(newItem: TChild, referenceItem?: TChild): void {
        if (referenceItem) {
            //Find the index of the referenceItem
            const index = this.options.children.indexOf(referenceItem);
            if (index > -1) {
                this.options.children.splice(index, 0, newItem);
                if (this.element && referenceItem.element) {
                    this.element.insertBefore(newItem.render(), referenceItem.element);
                }
            }
        } else {
            this.options.children.push(newItem);
            if (this.element) {
                this.element.appendChild(newItem.render());
            }
        }
    }

    removeChild(element: TChild): void {
        const index = this.options.children.indexOf(element);
        if (index > -1) {
            this.options.children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }

    clear(): void {
        const children = this.options.children;
        if (ko.isObservable(children)) {
            children([]);
        } else {
            this.options.children = [];
            if (this.element) {
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        }
    }

    options: UiChildrensElementOptions<TChild>;
}