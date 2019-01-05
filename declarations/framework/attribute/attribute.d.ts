/// <reference types="knockout" />
import * as types from "../../types/types";
export interface Attribute {
    name: types.AttributeName;
    value: string | KnockoutObservable<string>;
}
