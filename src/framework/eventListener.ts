import { UiElement } from "./uiElement";

export interface IEventListener {
    type: keyof HTMLElementEventMap;
    listener: (this: UiElement, event: any) => any;
    options?: boolean | IAddEventListenerOptions;
    isSupportedOnAllPlatforms: boolean;
}

export interface IAddEventListenerOptions extends AddEventListenerOptions {
    eventKey?: EventKey;
    altKey?: boolean;
    shiftKey?: boolean;
    ctrlKey?: boolean;
}

export type EventKey = "Enter" | "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight";

export class EventListener<TType extends keyof HTMLElementEventMap> implements IEventListener {
    constructor(
        type: TType,
        listener: (this: UiElement, event: HTMLElementEventMap[TType]) => any,
        options?: boolean | AddEventListenerOptions
    ) {
        this.type = type;
        this.listener = listener;
        this.options = options;
        this.isSupportedOnAllPlatforms = type.indexOf("touch") === -1 && type.indexOf("mouse") === -1;
    }
    type: TType;
    listener: (this: UiElement, event: HTMLElementEventMap[TType]) => any;
    options: boolean | IAddEventListenerOptions;
    isSupportedOnAllPlatforms: boolean;
}