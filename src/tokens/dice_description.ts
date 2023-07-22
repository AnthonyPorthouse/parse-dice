import { DiceDescription } from "../ast.js";
import { Token } from "./token.js";

export class T_DiceDesription extends Token {

    protected value;

    constructor(value: Token[]) {
        super(value)
        this.value = value;
    }

    getValue(): Token[] {
        return this.value
    }

    toJSON(): DiceDescription {
        return {
            type: "DiceDescription",
            values: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue().map((t: Token) => t.toString()).join('');
    }
}
