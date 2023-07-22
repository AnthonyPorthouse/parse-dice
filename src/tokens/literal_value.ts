import { LiteralValue } from "../ast.js";
import { Token } from "./token.js";

export class T_LiteralValue extends Token {
    protected value

    constructor(value: number) {
        super(value)
        this.value = value;
    }

    getValue(): number {
        return this.value
    }

    toJSON(): LiteralValue {
        return {
            type: "LiteralValue",
            value: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue().toString()
    }
}
