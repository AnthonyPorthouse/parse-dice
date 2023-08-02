import { Token } from "./token.js";

type T_LiteralValueSubType = number

export class T_LiteralValue extends Token {
    protected value

    constructor(value: T_LiteralValueSubType) {
        super(value)
        this.value = value;
    }

    getValue(): T_LiteralValueSubType {
        return this.value
    }

    toJSON() {
        return {
            type: "LiteralValue",
            value: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue().toString()
    }
}
