import { TextBox, TextBoxOptions } from "./textBox";

export interface PasswordBoxOptions extends TextBoxOptions {

}

export class PasswordBox extends TextBox {
    constructor(options?: PasswordBoxOptions) {
        super(options);

        this.inputType = "password";
        this.elementType = "PasswordBox";
    }  
}

