import { FrameworkElement } from "../index";
export declare class Dialog {
    constructor(options?: DialogOptions);
    show(): void;
    hide(): void;
    title: string | FrameworkElement;
    content: FrameworkElement;
}
export interface DialogOptions {
    title: string | FrameworkElement;
    content: FrameworkElement;
}
