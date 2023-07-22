import { Parser } from "./parser.js";

export function isNumber(char: number) {
    return char >= 48 && char <= 57;
}

export function isMath(char: number) {
    return char === 43 || char === 45
}

export function isWhitespace(char: number) {
    return char === 32;
}

export function isRegularDice(char: number) {
    return char === 68 || char === 100;
}

export function isFudgeDice(char: number) {
    return char === 70 || char === 102;
}

export function isDice(char: number) {
    return isRegularDice(char) || isFudgeDice(char);
}

export function containsDice(parser: Parser) {
    let offset = 0
    let char: number | undefined
    do {
        char = parser.peek(offset + 1).at(offset)
        if (char && isDice(char)) {
            return true;
        }
        offset += 1
    } while (char && !isMath(char));
    return false;
}

export default {
    isMath,
    isWhitespace,
    isDice,
    containsDice,
}
