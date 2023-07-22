import { beforeEach, describe, expect, test } from "vitest";
import { T_Roll } from "./roll.js";
import { T_LiteralValue } from "./literal_value.js";

describe(T_Roll, () => {

    let token: T_Roll;

    beforeEach(() => {
        token = new T_Roll();
    })

    test('setValue()', async () => {
        token.setValue([new T_LiteralValue(4)])
        expect(token).toMatchObject(new T_Roll([new T_LiteralValue(4)]))
    })

    test('getValue()', async () =>{
        expect(token.getValue()).toEqual([]);
    })

    test('toJSON()', async () => {
        expect(JSON.stringify(token)).toBe(JSON.stringify({
            type: 'Roll',
            values: []
        }));
    })

    test('toString()',async () => {
        expect(token.setValue([new T_LiteralValue(1), new T_LiteralValue(2)]).toString()).toBe('1 2');
    })
})
