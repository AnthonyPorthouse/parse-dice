import { T_RollTimes } from "./roll_times.js";
import { Token } from "./token.js";

type T_DiceDesriptionSubType = T_RollTimes

export class T_DiceDesription extends Token {

    protected value;

    constructor(value: T_DiceDesriptionSubType[]) {
        super(value)
        this.value = value;
    }

    getValue(): T_DiceDesriptionSubType[] {
        return this.value
    }

    toJSON() {
        return {
            type: "DiceDescription",
            values: this.getValue(),
        }
    }

    toString(): string {
        return this.getValue().map((t: Token) => t.toString()).join('');
    }
}
