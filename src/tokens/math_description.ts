import { MathDescription } from "../ast.js";
import { Token } from "./token.js";

export class T_MathDesription extends Token {
    protected value;

    constructor(value: MathDescription['value']) {
        super(value)
        this.value = value;
    }

    getValue(): MathDescription['value'] {
        return this.value
    }

    toJSON(): MathDescription {
        return {
            type: "MathDescription",
            value: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue();
    }
}
