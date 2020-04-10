"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("tocca");
const ko = require("knockout");
const style_1 = require("./style");
const eventListener_1 = require("./eventListener");
const userAgent_1 = require("./userAgent");
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
function isGlobalEvent(event) {
    return !(mouseEvents[event] || touchEvents[event]);
}
exports.settings = {
    tapDelay: 300
};
let observerOptions = {
    childList: true,
    subtree: true
};
const mutationObserver = new MutationObserver((mutationRecords) => {
    mutationRecords.forEach((mutationRecord) => {
        if (mutationRecord.removedNodes) {
            mutationRecord.removedNodes.forEach((removedNode) => {
                const uiElement = removedNode[uiElementPropertyName];
                if (uiElement && uiElement.disposeOnDomRemoval && uiElement.dispose) {
                    uiElement.dispose();
                }
            });
        }
    });
});
mutationObserver.observe(document.body, observerOptions);
function setObserverOptions(options) {
    observerOptions = options;
}
exports.setObserverOptions = setObserverOptions;
class UiElement {
    constructor(tagName, elementType, options) {
        this.attributes = {};
        this.style = {};
        this.innerTextIsHtml = false;
        this.children = new Array();
        this.knockoutSubscriptions = Array();
        this.diposeOnDomRemoval = false;
        this.dispose = () => {
            this.remove();
            for (let child of this.children) {
                child.dispose();
            }
            this.knockoutSubscriptions.forEach((subscription) => {
                subscription.dispose();
            });
            if (this.options.dispose) {
                this.options.dispose();
            }
        };
        this.tagName = tagName;
        this.options = options || {};
        if (!this.options.elementType) {
            this.options.elementType = elementType;
        }
        this.innerTextIsHtml = this.options.innerTextIsHtml;
        if (this.options.innerText) {
            const innerText = this.options.innerText;
            this.innerText = ko.unwrap(innerText);
            if (ko.isObservable(innerText)) {
                innerText.subscribe((newValue) => {
                    if (this.innerTextIsHtml) {
                        setInterval(newValue);
                    }
                    else {
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
                        this.setStyle({ [styleProperty]: newValue });
                    });
                }
            }
        }
    }
    addEventListenerToElement(type, listener, options) {
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
            this.element.addEventListener(type, (event) => {
                listener(event);
            }, {
                passive: options.passive,
                once: options.once
            });
        }
        else if (this.element.attachEvent) {
            this.element.attachEvent(type, (event) => {
                listener(event);
            });
        }
        else {
            throw "Your browser does not support 'addEventListener'";
        }
    }
    build() {
        if (this.options.id) {
            this.element.id = this.options.id;
        }
        if (this.options.elementType) {
            this.setAttribute("elementtype", this.options.elementType);
        }
        const bindings = {
            style: this.style,
            attr: this.attributes,
        };
        if (this.innerText) {
            if (this.innerTextIsHtml) {
                bindings["html"] = this.innerText;
            }
            else {
                bindings["text"] = this.innerText;
            }
        }
        if (this.options.className) {
            if (ko.isObservable(this.options.className)) {
                bindings["css"] = this.options.className;
            }
            else {
                bindings["css"] = {
                    [this.options.className]: true
                };
            }
        }
        ko.applyBindingsToNode(this.element, bindings);
        if (this.options.selectable === false) {
            this.addEventListenerToElement("selectstart", () => { return false; }, { passive: true });
            this.element.style.userSelect = "none";
        }
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
    addSubscription(observable, callback) {
        this.knockoutSubscriptions.push(observable.subscribe(callback));
    }
    render() {
        if (this.element) {
            return this.element;
        }
        if (typeof this.build === "function") {
            this.element = document.createElement(this.tagName);
            this.build();
            const clickEventListeners = new Array();
            const doubleClickEventListeners = new Array();
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
                        this.addEventListenerToElement(eventListener.type, (event) => {
                            if (event instanceof KeyboardEvent) {
                                if (eventListener.options) {
                                    const options = eventListener.options;
                                    if (options.altKey && !event.altKey) {
                                        return;
                                    }
                                    if (options.shiftKey && !event.shiftKey) {
                                        return;
                                    }
                                    if (options.ctrlKey && !event.ctrlKey) {
                                        return;
                                    }
                                    if (options.eventKey && options.eventKey !== event.key) {
                                        return;
                                    }
                                }
                            }
                            eventListener.listener.call(this, event);
                        }, eventListener.options);
                    }
                    else if (mouseEvents[eventListener.type] && userAgent_1.userAgent.device.supportsMouseEvents) {
                        this.addEventListenerToElement(eventListener.type, eventListener.listener, eventListener.options);
                    }
                    else if (touchEvents[eventListener.type] && userAgent_1.userAgent.device.supportsTouchEvents) {
                        this.addEventListenerToElement(eventListener.type, eventListener.listener, eventListener.options);
                    }
                });
                clickEventListeners.forEach((clickEventListener) => {
                    if (userAgent_1.userAgent.device.supportsTouchEvents) {
                        this.addEventListenerToElement("tap", clickEventListener.listener, clickEventListener.options);
                    }
                    if (userAgent_1.userAgent.device.supportsMouseEvents) {
                        this.addEventListenerToElement(clickEventListener.type, clickEventListener.listener, clickEventListener.options);
                    }
                });
                doubleClickEventListeners.forEach((doubleClickEventListener) => {
                    if (userAgent_1.userAgent.device.supportsTouchEvents) {
                        this.addEventListenerToElement("dbltap", doubleClickEventListener.listener, doubleClickEventListener.options);
                    }
                    if (userAgent_1.userAgent.device.supportsMouseEvents) {
                        this.addEventListenerToElement(doubleClickEventListener.type, doubleClickEventListener.listener, doubleClickEventListener.options);
                    }
                });
            }
            return this.element;
        }
        throw "The build method of this UiElement has not been defined";
    }
    refresh() { }
    remove() {
        if (this.element) {
            if (this.element.remove) {
                this.element.remove();
            }
            else {
                this.element.parentElement.removeChild(this.element);
            }
            this.element = null;
        }
    }
    handleMessage(message) { }
    getElement() {
        return this.element;
    }
    focus(options) {
        if (this.element) {
            this.element.focus(options);
        }
    }
    focusPreviousSibling(options) {
        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {
            this.element.nextSibling.focus(options);
        }
    }
    focusNextSibling(options) {
        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {
            this.element.nextSibling.focus(options);
        }
    }
    setInnerText(innerText) {
        this.innerText = innerText;
        if (this.element) {
            this.element.innerText = innerText;
        }
    }
    setInnerHtml(innerHtml) {
        this.innerText = innerHtml;
        if (this.element) {
            this.element.innerHTML = innerHtml;
        }
    }
    getAttribute(attributeName) {
        if (this.element) {
            return this.element.getAttribute(attributeName);
        }
        else {
            return ko.unwrap(this.attributes[attributeName]);
        }
    }
    setAttribute(name, value) {
        const currentAttribute = this.attributes[name];
        if (currentAttribute && ko.isObservable(currentAttribute)) {
            currentAttribute(ko.unwrap(value));
        }
        else {
            this.attributes[name] = value;
            if (this.element) {
                this.element.setAttribute(name, value);
            }
        }
    }
    deleteAttribute(attributeName) {
        if (this.attributes[attributeName]) {
            delete this.attributes[attributeName];
        }
        if (this.element) {
            this.element.removeAttribute(attributeName);
        }
    }
    getStyle(...cssProperties) {
        if (!cssProperties || cssProperties.length === 0) {
            return this.style;
        }
        const style = {};
        for (let cssProperty of cssProperties) {
            if (this.style[cssProperty]) {
                style[cssProperty] = this.style[cssProperty];
            }
            else if (this.element) {
                style[cssProperty] = this.element.style[cssProperty];
            }
        }
        return style;
    }
    getStyleValue(cssProperty) {
        if (this.style[cssProperty]) {
            return this.style[cssProperty];
        }
        else if (this.element) {
            return this.element.style[cssProperty];
        }
        return null;
    }
    setStyle(newStyle, overwriteExisting) {
        if (newStyle) {
            Object.keys(newStyle).forEach((key) => {
                if (this.style.hasOwnProperty(key)) {
                    if (!overwriteExisting) {
                        return;
                    }
                }
                const newValue = newStyle[key];
                const currentValue = this.style[key];
                if (currentValue && ko.isObservable(currentValue)) {
                    currentValue(ko.unwrap(newValue));
                }
                else {
                    this.style[key] = newValue;
                    if (this.element) {
                        if (newValue === null || newValue === undefined) {
                            if (userAgent_1.userAgent.browser.isInternetExplorer) {
                                this.element.style[key] = style_1.defaultStyle[key];
                            }
                            else {
                                this.element.style[key] = null;
                            }
                        }
                        else {
                            this.element.style[key] = newValue;
                        }
                    }
                }
            });
        }
    }
    setStyleNonStandard(name, value, overwriteExisting) {
        this.setStyle({ [name]: value }, overwriteExisting);
    }
    deleteStyle(style) {
        let styles;
        if (style instanceof Array) {
            styles = style;
        }
        else if (style instanceof Object) {
            styles = Object.keys(style);
        }
        else {
            styles = [style];
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
    addEventListener(type, listener, options) {
        if (!this.options.eventListeners) {
            this.options.eventListeners = new Array();
        }
        this.options.eventListeners.push(new eventListener_1.EventListener(type, listener, options));
    }
    dispatchEvent(type) {
        if (this.element) {
            return this.element.dispatchEvent(new Event(type));
        }
        return false;
    }
    getChildren() {
        return this.children;
    }
    setChildren(children, replace = true) {
        if (!children) {
            children = [];
        }
        if (replace) {
            this.children = children;
            if (this.element) {
                while (this.element.firstChild) {
                    this.element.removeChild(this.element.firstChild);
                }
            }
        }
        else {
            this.children.push(...children);
        }
        if (this.element) {
            if (children.length > 0) {
                const documentFragment = document.createDocumentFragment();
                for (let child of children) {
                    documentFragment.appendChild(child.render());
                }
                this.element.appendChild(documentFragment);
            }
        }
    }
    addChild(newChild, referenceChild) {
        if (referenceChild) {
            const index = this.children.indexOf(referenceChild);
            if (index > -1) {
                this.children.splice(index, 0, newChild);
                if (this.element && referenceChild.getElement()) {
                    this.element.insertBefore(newChild.render(), referenceChild.getElement());
                }
            }
        }
        else {
            this.children.push(newChild);
            if (this.element) {
                this.element.appendChild(newChild.render());
            }
        }
    }
    removeChild(element) {
        const index = this.children.indexOf(element);
        if (index > -1) {
            this.children.splice(index, 1);
            if (this.element) {
                this.element.removeChild(this.element.children[index]);
            }
        }
    }
    empty() {
        this.children = [];
        if (this.element) {
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
        }
    }
}
exports.UiElement = UiElement;
//# sourceMappingURL=uiElement.js.map