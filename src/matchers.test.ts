import { describe, expect, test } from "vitest";
import { containsDice, isDice, isFudgeDice, isMath, isNumber, isRegularDice, isWhitespace } from "./matchers.js";
import { Parser } from "./parser.js";

describe(isNumber, async () => {
    test.each([
        ['0'.charCodeAt(0), true],
        ['9'.charCodeAt(0), true],
        ['0'.charCodeAt(0) - 1, false],
        ['9'.charCodeAt(0) + 1, false],
    ])('isNumber(%i) -> %s', async (char: number, expected: boolean) => {
        expect(isNumber(char)).toBe(expected);
    })
})

describe(isMath, () => {
    test.each([
        ['-'.charCodeAt(0), true],
        ['+'.charCodeAt(0), true],
        ['-'.charCodeAt(0) - 1, false],
        ['-'.charCodeAt(0) + 1, false],
        ['+'.charCodeAt(0) - 1, false],
        ['+'.charCodeAt(0) + 1, false],
    ])('isMath(%i) -> %s', async (char: number, expected: boolean) => {
        expect(isMath(char)).toBe(expected)
    })
})

describe(isWhitespace, () => {
    test.each([
        [' '.charCodeAt(0), true],
        [' '.charCodeAt(0) - 1, false],
        [' '.charCodeAt(0) + 1, false],
    ])('isWhitespace(%i) -> %s', async (char: number, expected: boolean) => {
        expect(isWhitespace(char)).toBe(expected)
    })
})

describe(isRegularDice, () => {
    test.each([
        ['d'.charCodeAt(0), true],
        ['D'.charCodeAt(0), true],
        ['d'.charCodeAt(0) - 1, false],
        ['d'.charCodeAt(0) + 1, false],
        ['D'.charCodeAt(0) - 1, false],
        ['D'.charCodeAt(0) + 1, false],
    ])('isRegularDice(%i) -> %s', async (char: number, expected: boolean) => {
        expect(isRegularDice(char)).toBe(expected)
    })
})

describe(isFudgeDice, () => {
    test.each([
        ['f'.charCodeAt(0), true],
        ['F'.charCodeAt(0), true],
        ['f'.charCodeAt(0) - 1, false],
        ['f'.charCodeAt(0) + 1, false],
        ['F'.charCodeAt(0) - 1, false],
        ['F'.charCodeAt(0) + 1, false],
    ])('isFudgeDice(%i) -> %s', async (char: number, expected: boolean) => {
        expect(isFudgeDice(char)).toBe(expected)
    })
})

describe(isDice, () => {
    test.each([
        ['d'.charCodeAt(0), true],
        ['D'.charCodeAt(0), true],
        ['d'.charCodeAt(0) - 1, false],
        ['d'.charCodeAt(0) + 1, false],
        ['D'.charCodeAt(0) - 1, false],
        ['D'.charCodeAt(0) + 1, false],
        ['f'.charCodeAt(0), true],
        ['F'.charCodeAt(0), true],
        ['f'.charCodeAt(0) - 1, false],
        ['f'.charCodeAt(0) + 1, false],
        ['F'.charCodeAt(0) - 1, false],
        ['F'.charCodeAt(0) + 1, false],
    ])('isDice(%i) -> %s', async (char: number, expected: boolean) => {
        expect(isDice(char)).toBe(expected)
    })
})

describe(containsDice, () => {
    test.each([
        ['d6', true],
        ['d6 + 1', true],
        ['4d6', true],
        ['f', true],
        ['2f', true],
        ['7', false],
        ['7 + 2', false],
    ])('containsDice(%s) -> %s', async (value: string, expected: boolean) => {
        const parser = new Parser(value);
        expect(containsDice(parser)).toBe(expected);
    })
})
