import ko = require("knockout");
import { UiElement, UiElementOptions } from "./uiElement";

export interface UiChildrensElementOptions<TChild extends UiElement<UiElementOptions>> extends UiElementOptions {
    children?: Array<TChild>
}

export abstract class UiChildrensElement<TChild extends UiElement<UiElementOptions>> extends UiElement<UiElementOptions> {
    protected constructor(tagName: string, type: string, options?: UiChildrensElementOptions<TChild>) {
        super(tagName, type, options);
        if (options) {
            this.children = options.children;
        }

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            if (!this.children) {
                this.children = [];
            }

            //Make sure the items are rerendered when the items collection changes.
            if (ko.isObservable(this.children)) {
                this.children.subscribe(() => {
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

            //Create a documentFragment to reduce browser repaints
            const documentFragment = document.createDocumentFragment();
            for (let child of this.children) {
                documentFragment.appendChild(child.render());
            }

            //Add the documentFragment to the dom
            this.element.appendChild(documentFragment);
        }
    }


    private children: Array<TChild> = [];

    getChildren = () => {
        return this.children;
    }

    setChildren = (children: Array<TChild>): void => {
        this.children = children;
        this.renderItems();
    }

    addChild = (newItem: TChild, referenceItem?: TChild): void => {
        if (referenceItem) {
            //Find the index of the referenceItem
            const index = this.children.indexOf(referenceItem);
            if (index > -1) {
                this.children.splice(index, 0, newItem);
                if (this.element && referenceItem.element) {
                    this.element.insertBefore(newItem.render(), referenceItem.element);
                }
            }
        } else {
            this.children.push(newItem);
            if (this.element) {
                this.element.appendChild(newItem.render());
            }
        }
    }

    clear = (): void => {
        if (ko.isObservable(this.children)) {
            this.children([]);
        } else {
            this.children = [];
            if (this.element) {
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        }
    }

    removeChild = (element: TChild): void => {
        const index = this.children.indexOf(element);
        if (index > -1) {
            this.children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }
}