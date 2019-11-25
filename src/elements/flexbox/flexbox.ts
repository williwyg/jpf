import { UiElement } from "../../framework/uiElement";
import { ChildrensUiElement, ChildrensUiElementOptions} from "../../framework/ChildrensUiElement";
import * as types from "../../types/types";

export interface FlexboxOptions<TItem extends UiElement = UiElement> extends ChildrensUiElementOptions<TItem> {
    flexDirection?: types.FlexDirection;
    flexWrap?: types.FlexWrap;
    justifyContent?: types.JustifyContent;
    alignItems?: types.AlignItems;
    alignContent?: types.AlignContent;
}

export class Flexbox<TItem extends UiElement = UiElement> extends ChildrensUiElement<TItem> {
    constructor(options?: FlexboxOptions<TItem>) {
        super("div", "Flexbox", options);

        this.setStyle({ display: "flex" }, true);

        //Set the default values
        if (!this.options.flexDirection) {
            this.options.flexDirection = "row";
        }
        if (!this.options.flexWrap) {
            this.options.flexWrap = "wrap";
        }
        if (!this.options.justifyContent) {
            this.options.justifyContent = "flex-start";
        }
        if (!this.options.alignItems) {
            this.options.alignItems = "flex-start";
        }
        if (!this.options.alignContent) {
            this.options.alignContent = "flex-start";
        }

        this.setStyle({
            flexDirection: this.options.flexDirection,
            flexWrap: this.options.flexWrap,
            justifyContent: this.options.justifyContent,
            alignItems: this.options.alignItems,
            alignContent: this.options.alignContent
        });
    }

    protected readonly  options: FlexboxOptions<TItem>;
}