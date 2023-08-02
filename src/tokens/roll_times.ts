import { Token } from "./token.js";

type T_RoleTimesSubType = number

export class T_RollTimes extends Token {
    protected value

    constructor(value: T_RoleTimesSubType) {
        super(value)
        this.value = value;
    }

    getValue(): T_RoleTimesSubType {
        return this.value
    }

    toJSON() {
        return {
            type: "RollTimes",
            value: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue().toString()
    }
}
