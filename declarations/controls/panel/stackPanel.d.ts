import { ItemsElement, ItemsElementOptions } from "../../framework/index";
import * as types from "../../types/types";
export declare class StackPanel extends ItemsElement {
    constructor(options?: StackPanelOptions);
    flexDirection: types.FlexDirection;
    flexWrap: types.FlexWrap;
    justifyContent: types.JustifyContent;
    alignItems: types.AlignItems;
    alignContent: types.AlignContent;
}
export interface StackPanelOptions extends ItemsElementOptions {
    flexDirection?: types.FlexDirection;
    flexWrap?: types.FlexWrap;
    justifyContent?: types.JustifyContent;
    alignItems?: types.AlignItems;
    alignContent?: types.AlignContent;
}
