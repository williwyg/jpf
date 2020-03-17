import * as types from "./types";

export interface Attribute {
    name: types.AttributeName;
    value: string | number | KnockoutObservable<string | number>;
}