import "tocca";
import * as ko from "knockout";
import { Style, StyleObservable, defaultStyle } from "./style";
import { AttributeName } from "./types";
import { EventListener, IEventListener, IAddEventListenerOptions, UiElementEventMap } from "./eventListener";
import * as types from "./types";
import { userAgent } from "./userAgent";

const uiElementPropertyName = "uiElement";

const mouseEvents = {
    contextmenu: true,
    mousedown: true,
    mouseenter: true,
    mouseleave: true,
    mousemove: true,
    mouseout: true,
    mouseover: true,
    mouseup: true
};
const touchEvents = {
    touchcancel: true,
    touchend: true,
    touchmove: true,
    touchstart: true,
    longtap: true,
    swipeleft: true,
    swiperight: true,
    swipeup: true,
    swipedown: true
};

function isGlobalEvent(event: keyof UiElementEventMap): boolean {
    return !(mouseEvents[event] || touchEvents[event]);
}

export const settings = {
    tapDelay: 300
}

let observerOptions: MutationObserverInit = {
    childList: true,
    subtree: true
}

const mutationObserver = new MutationObserver(
    (mutationRecords: MutationRecord[]) => {
        mutationRecords.forEach((mutationRecord) => {
            if (mutationRecord.removedNodes) {
                mutationRecord.removedNodes.forEach((removedNode) => {
                    const uiElement = removedNode[uiElementPropertyName] as Disposable;
                    if (uiElement && uiElement.disposeOnDomRemoval && uiElement.dispose) {
                        uiElement.dispose();
                    }
                });
            }
        });
    }
);

mutationObserver.observe(
    document.body,
    observerOptions
);

export function setObserverOptions(options: MutationObserverInit) {
    observerOptions = options;
}

interface Disposable {
    disposeOnDomRemoval: boolean;
    dispose(): void;
}

export interface Attribute {
    name: AttributeName;
    value: string | number | KnockoutObservable<string | number>;
}

// eslint-disable-next-line
export interface IUiElement {
    render(): HTMLElement;
    getElement(): HTMLElement;
}

export interface UiElementOptions {
    id?: string;
    elementType?: string;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    eventListeners?: Array<IEventListener>;
    style?: StyleObservable;
    selectable?: boolean;
    innerText?: string | KnockoutObservable<string>;
    innerTextIsHtml?: boolean;
    addControlToDataDictionary?: boolean;
    children?: Array<IUiElement> | KnockoutObservableArray<IUiElement>;
    dispose?: () => void;
    disposeOnDomRemoval?: boolean;
}

export abstract class UiElement<TOptions extends UiElementOptions = UiElementOptions> implements IUiElement {
    protected constructor(tagName: string, elementType: string, options?: TOptions) {
        this.tagName = tagName;
        this.options = options || {} as TOptions;

        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }

        this.innerTextIsHtml = this.options.innerTextIsHtml;

        if (this.options.innerText) {
            const innerText = this.options.innerText;
            this.innerText = ko.unwrap(innerText);
            if (ko.isObservable(innerText)) {
                innerText.subscribe((newValue: string) => {
                    if (this.innerTextIsHtml) {
                        setInterval(newValue);
                    } else {
                        this.setInnerText(newValue);
                    }
                });
            }
        }

        if (this.options.attributes) {
            this.options.attributes.forEach((attribute) => {
                this.attributes[attribute.name] = ko.unwrap(attribute.value);
                if (ko.isObservable(attribute.value)) {
                    this.addSubscription(attribute.value, (newValue) => {
                        this.setAttribute(attribute.name, newValue);
                    });
                }
            });
        }

        if (this.options.children) {
            const children = this.options.children;
            this.children = ko.unwrap(children);
            if (ko.isObservable(children)) {
                children.subscribe((newChildren) => {
                    this.setChildren(newChildren);
                });
            }
        }

        if (this.options.style) {
            for (const styleProperty of Object.keys(this.options.style)) {
                const styleValue = this.options.style[styleProperty];
                this.style[styleProperty] = ko.unwrap(styleValue);
                if (ko.isObservable(styleValue)) {
                    this.addSubscription(styleValue, (newValue) => {
                        this.setStyle({ [styleProperty]: newValue } as any as Style);
                    });
                }
            }
        }
    }

    //Private members
    private attributes: { [index: string]: string | number } = {};
    private style: Style = {};
    private innerText: string;
    private innerTextIsHtml = false;
    private children = new Array<IUiElement>();
    private knockoutSubscriptions = Array<KnockoutSubscription>();
    private addEventListenerToElement(type: keyof UiElementEventMap, listener: (event: any) => any, options: IAddEventListenerOptions) {
        if (!type) {
            throw new Error("type is mandatory");
        }
        if (!listener) {
            throw new Error("listener is mandatory");
        }
        if (!options) {
            options = {};
        }
        if (!options.passive) {
            options.passive = false;
        }
        if (!options.once) {
            options.once = false;
        }

        if (this.element.addEventListener) {
            this.element.addEventListener(
                type,
                (event) => {
                    listener(event);
                },
                {
                    passive: options.passive,
                    once: options.once
                });
        } else if (this.element.attachEvent) {
            this.element.attachEvent(
                type,
                (event) => {
                    listener(event);
                }
            );
        } else {
            throw "Your browser does not support 'addEventListener'";
        }
    }

    //Protected members
    protected element: HTMLElement;
    protected readonly options: TOptions;
    protected build(): void {
        if (this.options.id) {
            this.element.id = this.options.id;
        }

        if (this.options.elementType) {
            this.setAttribute("elementtype", this.options.elementType);
        }

        const bindings = {
            style: this.style,
            attr: this.attributes,
        }

        if (this.innerText) {
            if (this.innerTextIsHtml) {
                bindings["html"] = this.innerText;
            } else {
                bindings["text"] = this.innerText;
            }
        }

        if (this.options.className) {
            if (ko.isObservable(this.options.className)) {
                bindings["css"] = this.options.className;
            } else {
                bindings["css"] = {
                    [this.options.className as string]: true
                };
            }
        }

        ko.applyBindingsToNode(this.element, bindings);

        //Find out if the element is none selectable
        if (this.options.selectable === false) {
            this.addEventListenerToElement("selectstart", () => { return false; }, { passive: true });
            this.element.style.userSelect = "none";
        }

        //Render the children
        if (this.children) {
            for (const child of this.children) {
                this.element.appendChild(child.render());
            }
        }

        if (this.options.addControlToDataDictionary) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.uiElement = this;
        }
    }
    protected addSubscription(observable: KnockoutObservable<any>, callback: (newValue) => void) {
        this.knockoutSubscriptions.push(observable.subscribe(callback));
    }

    //Public members
    render(): HTMLElement {
        if (this.element) {
            //If the element has already been rendered we return the rendered element
            return this.element;
        }

        //Check if the build property is pointing to a function.
        if (typeof this.build === "function") {
            //Create the html element.
            this.element = document.createElement(this.tagName);

            //Attach this UiElement to the HtmlElement
            //this.element[uiElementPropertyName] = this;

            //Build the UiElement
            this.build();

            //Add the eventListeners to the element
            const clickEventListeners = new Array<IEventListener>();
            const doubleClickEventListeners = new Array<IEventListener>();

            if (this.options.eventListeners) {
                const eventListeners = this.options.eventListeners;
                eventListeners.forEach((eventListener) => {
                    if (eventListener.type === "click") {
                        clickEventListeners.push(eventListener);
                        return;
                    }
                    if (eventListener.type === "dblclick") {
                        doubleClickEventListeners.push(eventListener);
                        return;
                    }

                    if (eventListener.type === "dragstart") {
                        this.setAttribute("draggable", "true");
                    }

                    if (isGlobalEvent(eventListener.type)) {

                        this.addEventListenerToElement(
                            eventListener.type,
                            (event: Event) => {
                                if (eventListener.options) {
                                    const options = eventListener.options as IAddEventListenerOptions;
                                    const keyEvent = event as KeyboardEvent;
                                    if (options.altKey && !keyEvent.altKey) {
                                        return;
                                    }
                                    if (options.shiftKey && !keyEvent.shiftKey) {
                                        return;
                                    }
                                    if (options.ctrlKey && !keyEvent.ctrlKey) {
                                        return;
                                    }
                                    if (options.eventKey && options.eventKey !== keyEvent.key) {
                                        return;
                                    }
                                }

                                eventListener.listener.call(this, event);
                            },
                            eventListener.options
                        );
                    }
                    else if (mouseEvents[eventListener.type] && userAgent.device.supportsMouseEvents) {
                        this.addEventListenerToElement(eventListener.type, eventListener.listener, eventListener.options);
                    }
                    else if (touchEvents[eventListener.type] && userAgent.device.supportsTouchEvents) {
                        this.addEventListenerToElement(eventListener.type, eventListener.listener, eventListener.options);
                    }
                });

                clickEventListeners.forEach((clickEventListener) => {
                    if (userAgent.device.supportsTouchEvents) {
                        // ReSharper disable once Html.EventNotResolved

                        this.addEventListenerToElement("tap", clickEventListener.listener, clickEventListener.options);
                    }
                    if (userAgent.device.supportsMouseEvents) {
                        this.addEventListenerToElement(clickEventListener.type, clickEventListener.listener, clickEventListener.options);
                    }
                });

                doubleClickEventListeners.forEach((doubleClickEventListener) => {
                    if (userAgent.device.supportsTouchEvents) {
                        // ReSharper disable once Html.EventNotResolved
                        this.addEventListenerToElement("dbltap", doubleClickEventListener.listener, doubleClickEventListener.options);
                    }
                    if (userAgent.device.supportsMouseEvents) {
                        this.addEventListenerToElement(doubleClickEventListener.type, doubleClickEventListener.listener, doubleClickEventListener.options);
                    }
                });
            }

            //Return the fully functional html element
            return this.element;
        }

        throw "The build method of this UiElement has not been defined";
    }
    refresh(): void { }
    remove(): void {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            } else {
                this.element.parentElement.removeChild(this.element);
            }

            this.element = null;
        }
    }

    handleMessage(message: object): void { }
    getElement(): HTMLElement {
        return this.element;
    }
    focus(options?: FocusOptions): void {
        if (this.element) {
            this.element.focus(options);
        }
    }
    focusPreviousSibling(options?: FocusOptions) {
        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {
            (this.element.nextSibling as HTMLElement).focus(options);
        }
    }
    focusNextSibling(options?: FocusOptions) {
        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {
            (this.element.nextSibling as HTMLElement).focus(options);
        }
    }
    setInnerText(innerText: string) {
        this.innerText = innerText;
        if (this.element) {
            this.element.innerText = innerText;
        }
    }
    setInnerHtml(innerHtml: string) {
        this.innerText = innerHtml;
        if (this.element) {
            this.element.innerHTML = innerHtml;
        }
    }

    //Public Attribute members
    getAttribute(attributeName: types.AttributeName): string | number {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        } else {
            return ko.unwrap<string | number>(this.attributes[attributeName]);
        }
    }
    setAttribute(name: types.AttributeName, value: string | number): void {
        const currentAttribute = this.attributes[name];
        if (currentAttribute && ko.isObservable(currentAttribute)) {
            //Set the observable and the binding takes care for updating the element
            currentAttribute(ko.unwrap(value));
        } else {
            this.attributes[name] = value;
            if (this.element) {
                this.element.setAttribute(name, value as string);
            }
        }
    }
    deleteAttribute(attributeName: string): void {
        if (this.attributes[attributeName]) {
            delete this.attributes[attributeName];
        }
        if (this.element) {
            this.element.removeAttribute(attributeName);
        }
    }

    //Public Style members
    getStyle(...cssProperties: Array<types.CssProperty>): Style {
        if (!cssProperties || cssProperties.length === 0) {
            return this.style;
        }
        const style: Style = {};
        for (let cssProperty of cssProperties) {
            if (this.style[cssProperty]) {
                style[cssProperty] = this.style[cssProperty] as never;
            }
            else if (this.element) {
                style[cssProperty] = this.element.style[cssProperty] as never;
            }
        }
        return style;
    }
    getStyleValue(cssProperty: types.CssProperty): any {
        if (this.style[cssProperty]) {
            return this.style[cssProperty];
        } else if (this.element) {
            return this.element.style[cssProperty];
        }
        return null;
    }
    setStyle(newStyle: Style, overwriteExisting?: boolean): void {
        if (newStyle) {
            Object.keys(newStyle).forEach((key: string) => {
                if (this.style.hasOwnProperty(key)) {
                    if (!overwriteExisting) {
                        return;
                    }
                }
                const newValue = newStyle[key];
                const currentValue = this.style[key];
                if (currentValue && ko.isObservable(currentValue)) {
                    currentValue(ko.unwrap(newValue));
                } else {
                    this.style[key] = newValue;
                    if (this.element) {
                        if (newValue === null || newValue === undefined) {
                            if (userAgent.browser.isInternetExplorer) {
                                //Setting a css style property to null does not work for internet explorer 
                                //so we reset to the default value for the given property.
                                this.element.style[key] = defaultStyle[key];
                            } else {
                                this.element.style[key] = null;
                            }
                        } else {
                            this.element.style[key] = newValue;
                        }
                    }
                }
            });
        }
    }
    setStyleNonStandard(name: string, value: any, overwriteExisting?: boolean) {
        this.setStyle({ [name]: value } as any as Style, overwriteExisting);
    }
    deleteStyle(style: types.CssProperty | Array<types.CssProperty> | Style): void {
        let styles: Array<string>;
        if (style instanceof Array) {
            styles = style;
        } else if (style instanceof Object) {
            styles = Object.keys(style as object);
        }
        else {
            styles = [style as string];
        }

        for (let cssProperty of styles) {
            if (this.style && this.style.hasOwnProperty(cssProperty)) {
                delete this.style[cssProperty];
            }
            if (this.element) {
                this.element.style[cssProperty] = undefined;
            }
        }
    }

    //Public Event members
    addEventListener<TType extends keyof UiElementEventMap>(
        type: TType,
        listener: (this: UiElement, event: UiElementEventMap[TType]) => any,
        options?: IAddEventListenerOptions
    ) {
        if (!this.options.eventListeners) {
            this.options.eventListeners = new Array();
        }
        this.options.eventListeners.push(new EventListener(type, listener, options));
    }
    dispatchEvent<TType extends keyof UiElementEventMap>(type: TType): boolean {
        if (this.element) {
            return this.element.dispatchEvent(new Event(type));
        }
        return false;
    }

    //Public Children members
    getChildren(): Array<IUiElement> {
        return this.children;
    }
    setChildren(children: Array<IUiElement>, replace: boolean = true): void {
        if (!children) {
            children = [];
        }

        if (replace) {
            this.children = children;
            if (this.element) {
                //Remove all existing children
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        } else {
            this.children.push(...children);
        }

        if (this.element) {
            if (children.length > 0) {
                //Create a documentFragment to reduce browser repaints
                const documentFragment = document.createDocumentFragment();
                for (let child of children) {
                    documentFragment.appendChild(child.render());
                }

                //Add the documentFragment to the dom
                this.element.appendChild(documentFragment);
            }
        }
    }
    addChild(newChild: IUiElement, referenceChild?: IUiElement): void {
        if (referenceChild) {
            //Find the index of the referenceItem
            const index = this.children.indexOf(referenceChild);
            if (index > -1) {
                this.children.splice(index, 0, newChild);
                if (this.element && referenceChild.getElement()) {
                    this.element.insertBefore(newChild.render(), referenceChild.getElement());
                }
            }
        } else {
            this.children.push(newChild);
            if (this.element) {
                this.element.appendChild(newChild.render());
            }
        }
    }
    removeChild(element: IUiElement): void {
        const index = this.children.indexOf(element);
        if (index > -1) {
            this.children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }
    empty(): void {
        this.children = [];

        if (this.element) {
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
        }
    }

    //Readonly properties
    readonly tagName: string;

    readonly diposeOnDomRemoval: boolean = false;
    readonly dispose = () => {
        //Remove the element from the dom
        this.remove();

        //Dispose all children
        for (let child of this.children) {
            (child as any as Disposable).dispose();
        }

        //Dispose all knockout subscriptions
        this.knockoutSubscriptions.forEach((subscription) => {
            subscription.dispose();
        });

        //Check if additional dispose logic has been provided.
        if (this.options.dispose) {
            this.options.dispose();
        }
    };
}
