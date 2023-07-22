import { Token } from "./tokens/token.js"

export type Roll = {
    type: "Roll",
    values: Token[]
}

export type DiceDescription = {
    type: "DiceDescription"
    values: Token[]
}

export type MathDescription = {
    type: "MathDescription",
    value: "+" | "-"
}

export type LiteralValue = {
    type: "LiteralValue"
    value: number
}

export type RollTimes = {
    type: "RollTimes",
    value: number
}

export type StandardDice = {
    type: "StandardDice",
    value: number
}
