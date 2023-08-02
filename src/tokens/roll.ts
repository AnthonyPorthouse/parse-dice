import { T_DiceDesription } from "./dice_description.js";
import { T_LiteralValue } from "./literal_value.js";
import { T_ArithmaticOperator } from "./arithmatic_operator.js";
import { Token } from "./token.js";

type T_RollSubType = T_DiceDesription | T_LiteralValue | T_ArithmaticOperator

export class T_Roll extends Token {
    protected value;

    constructor(value: T_RollSubType[] = []) {
        super(value)
        this.value = value;
    }

    getValue(): T_RollSubType[] {
        return this.value
    }

    toJSON() {
        return {
            type: "Roll",
            values: this.getValue(),
        }
    }

    toString() {
        return this.getValue().map((token: Token) => token.toString()).join(' ')
    }
}
