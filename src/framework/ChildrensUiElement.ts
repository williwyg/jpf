import ko = require("knockout");
import { UiElement, UiElementOptions } from "./uiElement";

export interface ChildrensUiElementOptions<TChild extends UiElement> extends UiElementOptions {
    children?: Array<TChild> | KnockoutObservableArray<TChild>
}

export abstract class ChildrensUiElement<TChild extends UiElement> extends UiElement {
    protected constructor(tagName: string, type: string, options?: ChildrensUiElementOptions<TChild>) {
        super(tagName, type, options);

        const children = this.options.children;
        if (ko.isObservable(children)) {
            children.subscribe(() => {
                this.renderChildren();
            });
        }
    }

    //Private members
    private renderChildren(): void {
        if (this.element) {
            //Remove all existing children
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }

            if (this.options.children) {
                //Create a documentFragment to reduce browser repaints
                const documentFragment = document.createDocumentFragment();
                for (let child of ko.unwrap(this.options.children)) {
                    documentFragment.appendChild(child.render());
                }

                //Add the documentFragment to the dom
                this.element.appendChild(documentFragment);
            }
        }
    }

    //Protected members
    protected build(): void {
        super.build();

        this.renderChildren();
    }
    protected options: ChildrensUiElementOptions<TChild>;

    //Public members
    getChildren(): Array<TChild> {
        return ko.unwrap(this.options.children);
    }

    setChildren(children: Array<TChild>): void {
        this.options.children = children;
        this.renderChildren();
    }

    addChild(newChild: TChild, referenceChild?: TChild): void {
        if (referenceChild) {
            //Find the index of the referenceItem
            const index = this.options.children.indexOf(referenceChild);
            if (index > -1) {
                this.options.children.splice(index, 0, newChild);
                if (this.element && referenceChild.getElement()) {
                    this.element.insertBefore(newChild.render(), referenceChild.getElement());
                }
            }
        } else {
            this.options.children.push(newChild);
            if (this.element) {
                this.element.appendChild(newChild.render());
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
}