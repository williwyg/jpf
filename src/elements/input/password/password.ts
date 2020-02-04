import { Text, TextOptions } from "../text/text";


export class Password extends Text {
    constructor(options?: TextOptions) {
        super(options,"PasswordBox", "password");
    }
}