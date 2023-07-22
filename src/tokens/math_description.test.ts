import { beforeAll, describe, expect, test } from "vitest";
import { T_MathDesription } from "./math_description.js"

describe(T_MathDesription, () => {

    let token: T_MathDesription;

    describe('+', () => {
        beforeAll(() => {
            token = new T_MathDesription('+');
        })

        test('getValue()', () =>{
            expect(token.getValue()).toBe('+');
        })

        test('toJSON()', () => {
            expect(JSON.stringify(token)).toBe(JSON.stringify({
                type: 'MathDescription',
                value: '+'
            }));
        })

        test('toString()', () => {
            expect(String(token)).toBe('+');
        })
    })

    describe('-', () => {
        beforeAll(() => {
            token = new T_MathDesription('-');
        })

        test('getValue()', () =>{
            expect(token.getValue()).toBe('-');
        })

        test('toJSON()', () => {
            expect(JSON.stringify(token)).toBe(JSON.stringify({
                type: 'MathDescription',
                value: '-'
            }));
        })

        test('toString()', () => {
            expect(String(token)).toBe('-');
        })
    })


})
