import { UiElement } from "../../framework/uiElement";
import { UiChildrensElement, UiChildrensElementOptions } from "../../framework/uiChildrensElement";
import * as types from "../../types/types";

export interface StackPanelOptions<TItem extends UiElement> extends UiChildrensElementOptions<TItem> {
    flexDirection?: types.FlexDirection;
    flexWrap?: types.FlexWrap;
    justifyContent?: types.JustifyContent;
    alignItems?: types.AlignItems;
    alignContent?: types.AlignContent;
}

export class StackPanel<TItem extends UiElement> extends UiChildrensElement<TItem> {
    constructor(options?: StackPanelOptions<TItem>) {
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

    readonly options: StackPanelOptions<TItem>;
}