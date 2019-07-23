import { UiElement } from "../../framework/uiElement";
import { ChildrensElement, ChildrensElementOptions } from "../../framework/childrensElement";
import * as types from "../../types/types";

export interface FlexboxOptions<TItem extends UiElement> extends ChildrensElementOptions<TItem> {
    flexDirection?: types.FlexDirection;
    flexWrap?: types.FlexWrap;
    justifyContent?: types.JustifyContent;
    alignItems?: types.AlignItems;
    alignContent?: types.AlignContent;
}

export class Flexbox<TItem extends UiElement> extends ChildrensElement<TItem> {
    constructor(options?: FlexboxOptions<TItem>) {
        super("div", "StackPanel", options);

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
    }

    build () {
        this.setStyle({
            flexDirection: this.options.flexDirection,
            flexWrap: this.options.flexWrap,
            justifyContent: this.options.justifyContent,
            alignItems: this.options.alignItems,
            alignContent: this.options.alignContent
        });

        super.build();
    }

    readonly options: FlexboxOptions<TItem>;
}