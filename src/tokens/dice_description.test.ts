import { beforeEach, describe, expect, test } from "vitest";
import { T_DiceDesription } from "./dice_description.js";
import { T_RollTimes } from "./roll_times.js";

describe(T_DiceDesription, () => {

    let token: T_DiceDesription;

    beforeEach(() => {
        token = new T_DiceDesription([]);
    })

    test('setValue()', async () => {
        token.setValue([new T_RollTimes(4)])
        expect(token).toMatchObject(new T_DiceDesription([new T_RollTimes(4)]))
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
        expect(token.setValue([new T_RollTimes(1), new T_RollTimes(2)]).toString()).toBe('12');
    })
})
