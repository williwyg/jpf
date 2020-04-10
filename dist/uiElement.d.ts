/// <reference types="knockout" />
import "tocca";
import { Style, StyleObservable } from "./style";
import { AttributeName } from "./types";
import { IEventListener, IAddEventListenerOptions, UiElementEventMap } from "./eventListener";
import * as types from "./types";
export declare const settings: {
    tapDelay: number;
};
export declare function setObserverOptions(options: MutationObserverInit): void;
export interface Attribute {
    name: AttributeName;
    value: string | number | KnockoutObservable<string | number>;
}
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
export declare abstract class UiElement<TOptions extends UiElementOptions = UiElementOptions> implements IUiElement {
    protected constructor(tagName: string, elementType: string, options?: TOptions);
    private attributes;
    private style;
    private innerText;
    private innerTextIsHtml;
    private children;
    private knockoutSubscriptions;
    private addEventListenerToElement;
    protected element: HTMLElement;
    protected readonly options: TOptions;
    protected build(): void;
    protected addSubscription(observable: KnockoutObservable<any>, callback: (newValue: any) => void): void;
    render(): HTMLElement;
    refresh(): void;
    remove(): void;
    handleMessage(message: object): void;
    getElement(): HTMLElement;
    focus(options?: FocusOptions): void;
    focusPreviousSibling(options?: FocusOptions): void;
    focusNextSibling(options?: FocusOptions): void;
    setInnerText(innerText: string): void;
    setInnerHtml(innerHtml: string): void;
    getAttribute(attributeName: types.AttributeName): string | number;
    setAttribute(name: types.AttributeName, value: string | number): void;
    deleteAttribute(attributeName: string): void;
    getStyle(...cssProperties: Array<types.CssProperty>): Style;
    getStyleValue(cssProperty: types.CssProperty): any;
    setStyle(newStyle: Style, overwriteExisting?: boolean): void;
    setStyleNonStandard(name: string, value: any, overwriteExisting?: boolean): void;
    deleteStyle(style: types.CssProperty | Array<types.CssProperty> | Style): void;
    addEventListener<TType extends keyof UiElementEventMap>(type: TType, listener: (this: UiElement, event: UiElementEventMap[TType]) => any, options?: IAddEventListenerOptions): void;
    dispatchEvent<TType extends keyof UiElementEventMap>(type: TType): boolean;
    getChildren(): Array<IUiElement>;
    setChildren(children: Array<IUiElement>, replace?: boolean): void;
    addChild(newChild: IUiElement, referenceChild?: IUiElement): void;
    removeChild(element: IUiElement): void;
    empty(): void;
    readonly tagName: string;
    readonly diposeOnDomRemoval: boolean;
    readonly dispose: () => void;
}
