import { FrameworkElementOptions } from "../../framework/frameworkElementOptions";

export interface AnchorOptions extends FrameworkElementOptions {
    text?: string | KnockoutObservable<string>;
    href?: string | KnockoutObservable<string>;
}