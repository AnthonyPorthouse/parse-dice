import { beforeAll, describe, expect, test } from "vitest";
import { T_ArithmaticOperator } from "./arithmatic_operator.js"

describe(T_ArithmaticOperator, () => {

    let token: T_ArithmaticOperator;

    describe('+', () => {
        beforeAll(() => {
            token = new T_ArithmaticOperator('+');
        })

        test('getValue()', () =>{
            expect(token.getValue()).toBe('+');
        })

        test('toJSON()', () => {
            expect(JSON.stringify(token)).toBe(JSON.stringify({
                type: 'ArithmaticOperator',
                value: '+'
            }));
        })

        test('toString()', () => {
            expect(String(token)).toBe('+');
        })
    })

    describe('-', () => {
        beforeAll(() => {
            token = new T_ArithmaticOperator('-');
        })

        test('getValue()', () =>{
            expect(token.getValue()).toBe('-');
        })

        test('toJSON()', () => {
            expect(JSON.stringify(token)).toBe(JSON.stringify({
                type: 'ArithmaticOperator',
                value: '-'
            }));
        })

        test('toString()', () => {
            expect(String(token)).toBe('-');
        })
    })


})
