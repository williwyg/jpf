import * as ko from "knockout";
import { UiElement, UiElementOptions } from "../../framework/uiElement";


export class Span extends UiElement {
    constructor(options: UiElementOptions) {
        super("span", "Span", options);
    }
}