import { beforeEach, describe, expect, test } from "vitest";
import { T_FudgeDice } from "./fudge_dice.js";

describe(T_FudgeDice, () => {
    let token: T_FudgeDice;

    beforeEach(() => {
        token = new T_FudgeDice();
    })

    test('getValue()', () =>{
        expect(token.getValue()).toBe('F');
    })

    test('setValue()', () => {
        token.setValue('f')
        expect(token.getValue()).toBe('F');
    })

    test('toJSON()', () => {
        expect(JSON.stringify(token)).toBe(JSON.stringify({
            type: 'FudgeDice',
            value: 'F'
        }));
    })

    test('toString()', async () => {
        expect(token.toString()).toBe('F')
    })
})
