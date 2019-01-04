/// <reference types="knockout" />
import { Attribute } from "./attribute";
import { Style } from "../style/style";
export interface FrameworkElementOptions {
    id?: string;
    type?: string;
    visible?: boolean | KnockoutObservable<boolean>;
    className?: string | KnockoutObservable<string>;
    attributes?: Array<Attribute>;
    style?: Style;
}
