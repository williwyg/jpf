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

function isNotNullOrUndefined(value) {
    return !(value === null || typeof value === "undefined");
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
    id?: string | number;
    elementType?: string | KnockoutObservable<string>;
    classNames?: string[] | KnockoutObservableArray<string>;
    attributes?: Array<Attribute> | KnockoutObservableArray<Attribute>;
    eventListeners?: Array<IEventListener>;
    style?: Style | StyleObservable;
    innerHtml?: string | KnockoutObservable<string>;
    innerText?: string | KnockoutObservable<string>;
    children?: Array<IUiElement> | KnockoutObservableArray<IUiElement>;
    addControlToDataDictionary?: boolean;
    userSelectable?: boolean;
    dispose?: () => void;
    disposeOnDomRemoval?: boolean;
    refresh?: () => void;
    visible?: boolean | KnockoutObservable<boolean>;
}

export abstract class UiElement<TOptions extends UiElementOptions = UiElementOptions> implements IUiElement {
    protected constructor(tagName: string, elementType: string, options?: TOptions) {
        this._tagName = tagName;
        this._elementType = elementType || "UiElement";
        this.options = options || {} as TOptions;

        if (options) {
            if (isNotNullOrUndefined(options.id)) {
                this.setAttribute("id", options.id);
            }

            if (options.elementType) {
                this._elementType = ko.unwrap(options.elementType);
                if (ko.isObservable(options.elementType)) {
                    this.addSubscription(
                        options.elementType,
                        () => {
                            this.setElementType(elementType);
                        }
                    );
                }
            }

            if (options.classNames) {
                this.setClasses(ko.unwrap(options.classNames), true);
                if (ko.isObservable(options.classNames)) {
                    this.addSubscription(
                        options.classNames,
                        (classNames) => {
                            this.setClasses(classNames, true);
                        }
                    );
                }
            }

            if (options.attributes) {
                this._setAttributes(ko.unwrap(options.attributes));
                if (ko.isObservable(options.attributes)) {
                    this.addSubscription(
                        options.attributes,
                        (attributes) => {
                            this._setAttributes(attributes);
                        }
                    );
                }
            }

            if (options.eventListeners) {
                this._eventListeners = options.eventListeners;
            }

            if (options.style) {
                for (const styleProperty of Object.keys(options.style)) {
                    const styleValue = options.style[styleProperty];
                    this._style[styleProperty] = ko.unwrap(styleValue);
                    if (ko.isObservable(styleValue)) {
                        this.addSubscription(styleValue, (newValue) => {
                            this.setStyle({ [styleProperty]: newValue } as any as Style);
                        });
                    }
                }
            }

            if (options.userSelectable === false) {
                this._userSelectable = false;
            }

            if (isNotNullOrUndefined(options.innerHtml)) {
                this.setInnerHtml(ko.unwrap(options.innerHtml));
                if (ko.isObservable(options.innerHtml)) {
                    this.addSubscription(options.innerHtml, (innerHtml) => {
                        this.setInnerHtml(innerHtml);
                    });
                }
            }

            if (isNotNullOrUndefined(options.innerText)) {
                this.setInnerText(ko.unwrap(options.innerText));
                if (ko.isObservable(options.innerText)) {
                    this.addSubscription(options.innerText, (newValue) => {
                        this.setInnerText(newValue);
                    });
                }
            }

            if (options.addControlToDataDictionary) {
                this._addControlToDataDictionary = true;
            }

            if (options.children) {
                this._children = ko.unwrap(options.children);
                if (ko.isObservable(options.children)) {
                    this.addSubscription(options.children, (newChildren) => {
                        this.setChildren(newChildren);
                    });
                }
            }

            if (options.dispose) {
                var dispose = this.dispose;
                this.dispose = () => {
                    dispose();
                    options.dispose();
                }
            }

            if (options.refresh) {
                this.refresh = options.refresh;
            }

            var visible = ko.unwrap(options.visible);
            if (visible === false) {
                this._visible = false;
            }
            if (ko.isObservable(options.visible)) {
                this.addSubscription(options.visible, (newValue) => {
                    this.setVisibility(newValue);
                });
            }
        }
    }

    // #region Private members
    // ReSharper disable InconsistentNaming
    private _tagName: string;
    private _elementType: string;
    private _attributes: { [index: string]: string | number } = {};
    private _classes = {}
    private _eventListeners: Array<IEventListener>;
    private _style: Style = {};
    private _userSelectable: boolean = true;
    private _innerHtml: string;
    private _innerText: string;
    private _addControlToDataDictionary: boolean = false;
    private _children = new Array<IUiElement>();
    private _knockoutSubscriptions = Array<KnockoutSubscription>();
    private _addEventListenerToElement(type: keyof UiElementEventMap, listener: (event: any) => any, options: IAddEventListenerOptions) {
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
    private _setAttributes(attributes: Array<Attribute>) {
        const existingAttributeNames = Object.keys(this._attributes);

        //Clear the attributes dictionary
        this._attributes = {};


        //Add the new attributes
        attributes.forEach((attribute) => {
            this._attributes[attribute.name] = ko.unwrap(attribute.value);
            if (ko.isObservable(attribute.value)) {
                this.addSubscription(attribute.value,
                    (newValue) => {
                        this.setAttribute(attribute.name, newValue);
                    }
                );
            }
        });

        //Check if there are attributes to be deleted
        if (existingAttributeNames) {
            existingAttributeNames.forEach((existingAttributeName) => {
                if (!this._attributes[existingAttributeName]) {
                    this.removeAttribute(existingAttributeName);
                }
            });
        }
    }
    private _styleDisplayVisible = "";
    private _visible = true;
    // ReSharper restore InconsistentNaming
    // #endregion

    // #region Protected members
    protected element: HTMLElement;
    protected build(): void {

        if (this._elementType) {
            this.setAttribute("elementtype", this._elementType);
        }

        //Determine the diplay value for when the element is visible.
        const display = this.getStyleValue("display");
        if (display && display !== "none") {
            this._styleDisplayVisible = display;
        }

        //Update the visibility to reflect the initial visible state
        this.setVisibility(this._visible);

        ko.applyBindingsToNode(
            this.element,
            {
                style: this._style,
                attr: this._attributes
            }
        );

        if (isNotNullOrUndefined(this._innerHtml)) {
            this.element.innerHTML = this._innerHtml;
        }

        if (isNotNullOrUndefined(this._innerText)) {
            this.element.innerText = this._innerText;
        }

        this.element.className = Object.keys(this._classes).join(" ");

        //Find out if the element is none selectable
        if (this._userSelectable === false) {
            this._addEventListenerToElement("selectstart", () => { return false; }, { passive: true });
            this.element.style.userSelect = "none";
        }

        //Render the children
        if (this._children) {
            this._children.forEach((child) => {
                this.element.appendChild(child.render());
            });
        }

        if (this._addControlToDataDictionary) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.uiElement = this;
        }
    }
    protected readonly options: TOptions;
    // #endregion

    // #region Public members
    //Render the virtual UiElement to a html element
    render(): HTMLElement {
        if (this.element) {
            //If the element has already been rendered we remove the element from the dom
            this.remove();
        }

        //Check if the build property is pointing to a function.
        if (typeof this.build === "function") {
            //Create the html element.
            this.element = document.createElement(this._tagName);

            //Build the UiElement
            this.build();

            //Add the eventListeners to the element
            const clickEventListeners = new Array<IEventListener>();
            const doubleClickEventListeners = new Array<IEventListener>();

            if (this._eventListeners) {
                const eventListeners = this._eventListeners;
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

                        this._addEventListenerToElement(
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
                        this._addEventListenerToElement(eventListener.type, eventListener.listener, eventListener.options);
                    }
                    else if (touchEvents[eventListener.type] && userAgent.device.supportsTouchEvents) {
                        this._addEventListenerToElement(eventListener.type, eventListener.listener, eventListener.options);
                    }
                });

                clickEventListeners.forEach((clickEventListener) => {
                    if (userAgent.device.supportsTouchEvents) {
                        // ReSharper disable once Html.EventNotResolved

                        this._addEventListenerToElement("tap", clickEventListener.listener, clickEventListener.options);
                    }
                    if (userAgent.device.supportsMouseEvents) {
                        this._addEventListenerToElement(clickEventListener.type, clickEventListener.listener, clickEventListener.options);
                    }
                });

                doubleClickEventListeners.forEach((doubleClickEventListener) => {
                    if (userAgent.device.supportsTouchEvents) {
                        // ReSharper disable once Html.EventNotResolved
                        this._addEventListenerToElement("dbltap", doubleClickEventListener.listener, doubleClickEventListener.options);
                    }
                    if (userAgent.device.supportsMouseEvents) {
                        this._addEventListenerToElement(doubleClickEventListener.type, doubleClickEventListener.listener, doubleClickEventListener.options);
                    }
                });
            }

            //Return the fully functional html element
            return this.element;
        }

        throw "The build method of this UiElement has not been defined";
    }
    refresh(): void { }

    //Remove the rendered element from the dom
    remove(): void {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            } else {
                if (this.element.parentElement) {
                    this.element.parentElement.removeChild(this.element);
                }
            }

            this.element = null;
        }
    }

    handleMessage(message: object): void {
        console.log(JSON.stringify(message));
    }

    //Get the rendered html element
    getElement(): HTMLElement {
        return this.element;
    }

    //Focus the rendered html element
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
    setElementType(elementType) {
        this._elementType = elementType;
        this.setAttribute("elementType", elementType);
    }
    setClasses(classNames: string[], replace: boolean) {
        //If all existing classes need to be replace we reset the classes object to an empty object
        if (replace) {
            this._classes = {};
        }

        //Add all the classNames to the classes object
        if (classNames) {
            classNames.forEach((className) => {
                this._classes[className] = true;
            });
        }

        //If the UiElement is rendered update the className property of the html element
        if (this.element) {
            this.element.className = Object.keys(this._classes).join(" ");
        }
    }
    removeClasses(classNames: string[]) {
        if (classNames) {
            classNames.forEach((className) => {
                if (this._classes[className]) {
                    delete this._classes[className];
                }

                //If the UiElement is rendered remove the className from the html element
                if (this.element) {
                    this.element.classList.remove(className);
                }
            });
        }
    }
    setInnerHtml(innerHtml: string) {
        if (isNotNullOrUndefined(innerHtml)) {
            this.setInnerText(null);
        }
        this._innerHtml = innerHtml;
        if (this.element) {
            this.element.innerHTML = innerHtml;
        }
    }

    setInnerText(innerText: string) {
        if (isNotNullOrUndefined(innerText)) {
            this.setInnerHtml(null);
        }
        this._innerText = innerText;
        if (this.element) {
            this.element.innerText = innerText;
        }
    }
    setAttribute(name: types.AttributeName, value: string | number): void {
        //Add the attribute to the attributes dictionary
        this._attributes[name] = value;

        //If the UiElement is rendered add the attribute to the html element
        if (this.element) {
            this.element.setAttribute(name, value as string);
        }
    }
    removeAttribute(attributeName: string): void {
        //Delete the attribute from the attributes dictionary
        if (this._attributes[attributeName]) {
            delete this._attributes[attributeName];
        }

        //if the UiElement is rendered remove the attribute from the html element
        if (this.element) {
            this.element.removeAttribute(attributeName);
        }
    }
    getAttribute(attributeName: types.AttributeName): string | number {
        //Check if the UiElement is rendered
        if (this.element) {
            //Return the rendered value
            return this.element.getAttribute(attributeName);
        } else {
            //Return the value from the attributes dictionary
            return this._attributes[attributeName];
        }
    }

    //Public Style members
    getStyle(...cssProperties: Array<types.CssProperty>): Style {
        if (!cssProperties || cssProperties.length === 0) {
            return this._style;
        }
        const style: Style = {};

        if (cssProperties) {
            cssProperties.forEach((cssProperty) => {
                if (this._style[cssProperty]) {
                    style[cssProperty] = this._style[cssProperty] as never;
                }
                else if (this.element) {
                    style[cssProperty] = this.element.style[cssProperty] as never;
                }
            });
        }

        return style;
    }
    getStyleValue(cssProperty: types.CssProperty): any {
        if (this._style[cssProperty]) {
            return this._style[cssProperty];
        } else if (this.element) {
            return this.element.style[cssProperty];
        }
        return null;
    }
    setStyle(newStyle: Style, overwriteExisting?: boolean): void {
        if (newStyle) {
            Object.keys(newStyle).forEach((key: string) => {
                if (this._style.hasOwnProperty(key)) {
                    if (!overwriteExisting) {
                        return;
                    }
                }
                const newValue = newStyle[key];
                this._style[key] = newValue;
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

        styles.forEach((cssProperty) => {
            if (this._style && this._style.hasOwnProperty(cssProperty)) {
                delete this._style[cssProperty];
            }
            if (this.element) {
                this.element.style[cssProperty] = undefined;
            }
        });
    }
    setVisibility(visible: boolean) {
        this._visible = visible;
        if (this.element) {
            if (visible) {
                this.element.style.display = this._styleDisplayVisible;
            } else {
                this.element.style.display = "none";
            }
        }
    }

    addSubscription<TObservable>(observable: KnockoutObservable<TObservable>, callback: (newValue: TObservable) => void) {
        this._knockoutSubscriptions.push(observable.subscribe(callback));
    }
    dispatchEvent<TType extends keyof UiElementEventMap>(type: TType): boolean {
        if (this.element) {
            return this.element.dispatchEvent(new Event(type));
        }
        return false;
    }
    addEventListener<TType extends keyof UiElementEventMap>(
        type: TType,
        listener: (this: UiElement, event: UiElementEventMap[TType]) => any,
        options?: IAddEventListenerOptions
    ) {
        if (!this._eventListeners) {
            this._eventListeners = new Array();
        }
        this._eventListeners.push(new EventListener(type, listener, options));
    }

    //Public Children members
    getChildren(): Array<IUiElement> {
        return this._children;
    }
    setChildren(children: Array<IUiElement>, replace: boolean = true): void {
        if (!children) {
            children = [];
        }

        if (replace) {
            this._children = children;
            if (this.element) {
                //Remove all existing children
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        } else {
            this._children.push(...children);
        }

        if (this.element) {
            if (children.length > 0) {
                //Create a documentFragment to reduce browser repaints
                const documentFragment = document.createDocumentFragment();
                children.forEach((child) => {
                    documentFragment.appendChild(child.render());
                });

                //Add the documentFragment to the dom
                this.element.appendChild(documentFragment);
            }
        }
    }
    addChild(newChild: IUiElement, referenceChild?: IUiElement): void {
        if (referenceChild) {
            //Find the index of the referenceItem
            const index = this._children.indexOf(referenceChild);
            if (index > -1) {
                this._children.splice(index, 0, newChild);
                if (this.element && referenceChild.getElement()) {
                    this.element.insertBefore(newChild.render(), referenceChild.getElement());
                }
            }
        } else {
            this._children.push(newChild);
            if (this.element) {
                this.element.appendChild(newChild.render());
            }
        }
    }
    removeChild(element: IUiElement): void {
        const index = this._children.indexOf(element);
        if (index > -1) {
            this._children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }
    empty(): void {
        this._innerText = null;
        this._innerHtml = null;
        this._children = [];

        if (this.element) {
            this.element.innerHTML = "";
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
        }
    }

    readonly diposeOnDomRemoval: boolean = false;
    readonly dispose = () => {
        //Remove the element from the dom
        this.remove();

        if (this._children) {
            this._children.forEach((child) => {
                (child as any as Disposable).dispose();
            });
        }

        //Dispose all knockout subscriptions
        this._knockoutSubscriptions.forEach((subscription) => {
            subscription.dispose();
        });
    };
    // #endregion
}
