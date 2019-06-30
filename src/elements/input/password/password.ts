import { Text, TextOptions } from "../text/text";

export interface PasswordOptions extends TextOptions {

}

export class Password extends Text {
    constructor(options?: PasswordOptions) {
        super(options,"PasswordBox", "password");
    }

    readonly options: PasswordOptions;
}