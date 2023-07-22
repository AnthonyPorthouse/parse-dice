import { Roll } from "../ast.js";
import { Token } from "./token.js";

export class T_Roll extends Token {
    protected value;

    constructor(value: Token[] = []) {
        super(value)
        this.value = value;
    }

    getValue(): Token[] {
        return this.value
    }

    toJSON(): Roll {
        return {
            type: "Roll",
            values: this.getValue(),
        }
    }

    toString() {
        return this.getValue().map((token: Token) => token.toString()).join(' ')
    }
}
