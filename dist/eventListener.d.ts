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
    listener: (event: Event) => void;
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
export declare type EventKey = "Enter" | "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight";
export declare class EventListener<TType extends keyof UiElementEventMap> implements IEventListener {
    constructor(type: TType, listener: (event: UiElementEventMap[TType]) => void, options?: IAddEventListenerOptions);
    type: TType;
    listener: (event: Event) => void;
    options: IAddEventListenerOptions;
}
