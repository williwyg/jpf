import { Text, TextOptions } from "../text/text";

export interface PasswordOptions extends TextOptions {

}

export class Password extends Text {
    constructor(options?: PasswordOptions) {
        super(options,"PasswordBox", "password");
    }

    //#region Protected members
    protected options: PasswordOptions;
    //#endregion
}