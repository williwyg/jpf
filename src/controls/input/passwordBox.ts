import { TextBox, TextBoxOptions} from "./textBox";

export interface PasswordBoxOptions extends TextBoxOptions {

}

export class PasswordBox extends TextBox {
    constructor(options?: PasswordBoxOptions) {
        super(options,"PasswordBox", "password");
    }

    readonly options: PasswordBoxOptions;
}