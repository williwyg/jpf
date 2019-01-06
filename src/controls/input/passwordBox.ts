import { TextBox, TextBoxOptions} from "./textBox";

export class PasswordBox extends TextBox {
    constructor(options?: PasswordBoxOptions) {
        super(options);

        this.inputType = "password";
        this.elementType = "PasswordBox";
    }  
}

export interface PasswordBoxOptions extends TextBoxOptions {
    
}