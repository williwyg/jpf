import { UiElement } from "./uiElement";

export interface UiElementEventMap extends HTMLElementEventMap {
    "longtap": Event;
    "swipeleft": Event;
    "swiperight": Event;
    "swipeup": Event;
    "swipedown": Event;
}

export interface IEventListener {
    type: keyof UiElementEventMap;
    listener: (this: UiElement, event: any) => any;
    options?: boolean | IAddEventListenerOptions;
}



export interface IAddEventListenerOptions extends AddEventListenerOptions {
    eventKey?: EventKey;
    altKey?: boolean;
    shiftKey?: boolean;
    ctrlKey?: boolean;
}

export type EventKey = "Enter" | "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight";

export class EventListener<TType extends keyof UiElementEventMap> implements IEventListener {
    constructor(
        type: TType,
        listener: (this: UiElement, event: UiElementEventMap[TType]) => any,
        options?: boolean | AddEventListenerOptions
    ) {
        this.type = type;
        this.listener = listener;
        this.options = options;
    }
    type: TType;
    listener: (this: UiElement, event: UiElementEventMap[TType]) => any;
    options: boolean | IAddEventListenerOptions;
}