import { Token } from "./token.js";

type T_FudgeDiceSubType = 'F' | 'f'

export class T_FudgeDice extends Token {
    protected value;

    constructor(value?: T_FudgeDiceSubType | undefined) {
        value = 'F'
        super(value)
        this.value = value;
    }

    getValue(): T_FudgeDiceSubType {
        return 'F'
    }

    toJSON() {
        return {
            type: "FudgeDice",
            value: 'F',
        }
    }

    toString(): string {
        return 'F'
    }
}
