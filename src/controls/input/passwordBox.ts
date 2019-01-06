import { TextBox, TextBoxOptions} from "./textBox";

export class PasswordBox extends TextBox {
    constructor(options?: PasswordBoxOptions) {
        super(options);

        this.type = "PasswordBox";

        const buildSuper = this.build;
        this.build = () => {
            buildSuper();

            var input = this.element as HTMLInputElement;
            input.type = "password";
        }
    }  
}

export interface PasswordBoxOptions extends TextBoxOptions {
    
}