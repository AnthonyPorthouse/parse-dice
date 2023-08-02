import { beforeEach, describe, expect, test } from "vitest";
import { T_RollTimes } from "./roll_times.js";

describe(T_RollTimes, () => {
    let token: T_RollTimes;

    beforeEach(() => {
        token = new T_RollTimes(7);
    })

    test('getValue()', () =>{
        expect(token.getValue()).toBe(7);
    })

    test('setValue()', () => {
        token.setValue(4)
        expect(token.getValue()).toBe(4);
    })

    test('toJSON()', () => {
        expect(JSON.stringify(token)).toBe(JSON.stringify({
            type: 'RollTimes',
            value: 7
        }));
    })

    test('toString()', async () => {
        expect(token.toString()).toBe('7')
    })
})
