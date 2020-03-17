export interface UiElementEventMap extends HTMLElementEventMap {
    "tap": Event;
    "dbltap": Event;
    "longtap": Event;
    "swipeleft": Event;
    "swiperight": Event;
    "swipeup": Event;
    "swipedown": Event;
}

export interface IEventListener {
    type: keyof UiElementEventMap;
    listener: (event: any) => any;
    options?: IAddEventListenerOptions;
}



export interface IAddEventListenerOptions extends AddEventListenerOptions {
    eventKey?: EventKey;
    altKey?: boolean;
    shiftKey?: boolean;
    ctrlKey?: boolean;
    mouseLeft?: boolean;
    mouseMiddle?: boolean;
    mouseRight?: boolean;
}

export type EventKey = "Enter" | "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight";

export class EventListener<TType extends keyof UiElementEventMap> implements IEventListener {
    constructor(
        type: TType,
        listener: (event: UiElementEventMap[TType]) => any,
        options?: AddEventListenerOptions
    ) {
        this.type = type;
        this.listener = listener;
        this.options = options;
    }
    type: TType;
    listener: (event: UiElementEventMap[TType]) => any;
    options: IAddEventListenerOptions;
}