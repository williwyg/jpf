import { UiElement } from "../framework/uiElement";
import { StackPanel } from "../elements/panel/stackPanel";
import { Label } from "../elements/label/label";
import { Style } from "../style/style";

export interface DialogOptions {
    title?: string | UiElement;
    titleStyle?: Style;
    content?: UiElement;
    contentStyle?: Style;
    actions?: Array<DialogAction> | KnockoutObservableArray<DialogAction>;
    actionsStyle?: Style;
}

export class Dialog {
    constructor(options?: DialogOptions) {
        if (options) {

        }
    }

    private element: HTMLElement;

    open() {
        const dialogContainer = new StackPanel(
            {
                flexDirection: "column",
                style: {
                    position: "fixed",
                    margin: "auto",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            }
        );

        if (this.title) {
            if (this.title instanceof UiElement) {
                dialogContainer.addChild(this.title);
            } else {
                dialogContainer.addChild(new Label({ text: this.title }));
            }
        }
        if (this.content) {
            dialogContainer.addChild(this.content);
        }
        if (this.actions) {

        }

        document.appendChild(dialogContainer.render());
    }

    close() {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            } else {
                this.element.parentElement.removeChild(this.element);
            }
        }
    }

    title: string | UiElement;
    content: UiElement;
    actions: Array<DialogAction> | KnockoutObservableArray<DialogAction>;
}



export interface DialogAction {
    caption: string | UiElement;
    onexecute: () => Promise<boolean> | boolean;
    closeOnFail?: boolean;
}