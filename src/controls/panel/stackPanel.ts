import { UiElement, } from "../../framework/uiElement";
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

        if (options) {
            this.flexDirection = options.flexDirection;
            this.flexWrap = options.flexWrap;
            this.justifyContent = options.justifyContent;
            this.alignItems = options.alignItems;
            this.alignContent = options.alignContent;
        }

        const buildSuper = this.build;
        this.build = () => {
            this.setStyle({
                flexDirection: this.flexDirection,
                flexWrap: this.flexWrap,
                justifyContent: this.justifyContent,
                alignItems: this.alignItems,
                alignContent: this.alignContent
            });

            buildSuper();
        }
    }

    flexDirection: types.FlexDirection = "row";
    flexWrap: types.FlexWrap = "wrap";
    justifyContent: types.JustifyContent = "flex-start";
    alignItems: types.AlignItems = "flex-start";
    alignContent: types.AlignContent = "flex-start";
}