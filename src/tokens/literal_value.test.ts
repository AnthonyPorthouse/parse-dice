import { beforeEach, describe, expect, test } from "vitest";
import { T_LiteralValue } from "./literal_value.js";

describe(T_LiteralValue, () => {
    let token: T_LiteralValue;

    beforeEach(() => {
        token = new T_LiteralValue(7);
    })

    test('getValue()', () =>{
        expect(token.getValue()).toBe(7);
    })

    test('toJSON()', () => {
        expect(JSON.stringify(token)).toBe(JSON.stringify({
            type: 'LiteralValue',
            value: 7
        }));
    })

    test('toString()', async () => {
        expect(token.toString()).toBe('7')
    })
})
