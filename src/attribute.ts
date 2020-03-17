import { AttributeName } from "./types";

export interface Attribute {
    name: AttributeName;
    value: string | number | KnockoutObservable<string | number>;
}