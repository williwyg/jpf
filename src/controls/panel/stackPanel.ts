import { ItemsElement, ItemsElementOptions } from "../../framework/index";
import * as types from "../../types/types";

export class StackPanel extends ItemsElement {
    constructor(options?: StackPanelOptions) {
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

export interface StackPanelOptions extends ItemsElementOptions {
    flexDirection?: types.FlexDirection;
    flexWrap?: types.FlexWrap;
    justifyContent?: types.JustifyContent;
    alignItems?: types.AlignItems;
    alignContent?: types.AlignContent;
}