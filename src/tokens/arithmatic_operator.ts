import { Token } from "./token.js";

type T_ArithmaticOperatorSubType = '+' | '-'

export class T_ArithmaticOperator extends Token {
    protected value;

    constructor(value: T_ArithmaticOperatorSubType) {
        super(value)
        this.value = value;
    }

    getValue(): T_ArithmaticOperatorSubType {
        return this.value
    }

    toJSON() {
        return {
            type: "ArithmaticOperator",
            value: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue();
    }
}
