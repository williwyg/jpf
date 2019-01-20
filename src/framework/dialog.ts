import { FrameworkElement } from "../index";

export class Dialog {
    constructor(options?: DialogOptions) {
        if (options) {

        }
    }

    private element : HTMLElement;

    show() {

    }

    hide() {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            } else {
                this.element.parentElement.removeChild(this.element);
            }
        }
    }

    title: string|FrameworkElement;
    content: FrameworkElement;
}

export interface DialogOptions {
    title: string| FrameworkElement;
    content: FrameworkElement;
}