import { UiElement } from "./uiElement";

export interface IEventListener {
    type: keyof HTMLElementEventMap;
    listener: (this: HTMLElement, event: any, uiElement: any) => any;
    options?: boolean | AddEventListenerOptions;
}

export class EventListener<TType extends keyof HTMLElementEventMap> implements IEventListener {
    constructor(
        type: TType,
        listener: (this: HTMLElement, event: HTMLElementEventMap[TType], uiElement: UiElement) => any,
        options?: boolean | AddEventListenerOptions
    ) {
        this.type = type;
        this.listener = listener;
        this.options = options;
    }
    type: TType;
    listener: (this: HTMLElement, event: HTMLElementEventMap[TType], uiElement: UiElement) => any;
    options: boolean | AddEventListenerOptions;
}