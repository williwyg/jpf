import { FrameworkElement, FrameworkElementOptions } from "../../framework/frameworkElement/frameworkElement"

export class Div extends FrameworkElement {
    constructor(options?: DivOptions) {
        super("div", "Div", options);
    }
    
}

export interface DivOptions extends FrameworkElementOptions {
    
}