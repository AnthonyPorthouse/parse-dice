import {
  containsDice,
  isArithmaticOperator,
  isFudgeDice,
  isNumber,
  isWhitespace,
} from "./matchers.js";
import { T_LiteralValue } from "./tokens/literal_value.js";
import { T_ArithmaticOperator } from "./tokens/arithmatic_operator.js";
import { T_Roll } from "./tokens/roll.js";
import { Token } from "./tokens/token.js";
import { T_DiceDesription } from "./tokens/dice_description.js";
import { T_FudgeDice } from "./tokens/fudge_dice.js";

export class Parser {
  private currentPos: number;
  private originalInput: Buffer;
  private input: Buffer;

  constructor(input: string | Buffer) {
    if (!Buffer.isBuffer(input)) {
      input = Buffer.from(input);
    }

    this.originalInput = Buffer.from(input);
    this.input = Buffer.from(input);

    this.currentPos = 0;
  }

  public getOriginalInput(): Buffer {
    return this.originalInput;
  }

  public getCurrentPosition(): number {
    return this.currentPos;
  }

  public peek(count = 0): Buffer {
    if (count < 1) {
      count = 1;
    }

    return this.input.subarray(this.currentPos, this.currentPos + count);
  }

  public consume(count = 0): Buffer {
    if (count < 1) {
      count = 1;
    }

    const consumed = this.peek(count);

    this.currentPos += count;

    return consumed;
  }

  public isEOF(): boolean {
    return this.peek().at(-1) === undefined;
  }

  public static parse(value: string): T_Roll {
    const currentToken = new T_Roll();

    const parser = new Parser(value);

    while (!parser.isEOF()) {
      const char = parser.peek()[0];

      let value;
      let newToken: Token | undefined;

      switch (true) {
        // Whitespace
        case isWhitespace(char):
          parser.consume();
          break;

        // Segment contains dice
        case containsDice(parser):
          newToken = this.parseDice(parser);
          if (newToken) {
            currentToken.setValue([...currentToken.getValue(), newToken]);
          }
          break;

        // Numeric Values
        case isNumber(char):
          newToken = this.parseNumericToken(parser);
          if (newToken) {
            currentToken.setValue([...currentToken.getValue(), newToken]);
          }
          break;

        // + or -
        case isArithmaticOperator(char):
          value = parser.consume()[0];

          currentToken.setValue([
            ...currentToken.getValue(),
            new T_ArithmaticOperator(value === 43 ? "+" : "-"),
          ]);
          break;

        default:
          throw Error(
            `Unexpected character at position ${
              parser.getCurrentPosition() + 1
            } '${String.fromCharCode(char)}'`
          );
      }
    }

    return currentToken;
  }

  private static parseNumericToken(parser: Parser): Token | undefined {
    let offset = 0;
    let lastChar: number | undefined;
    do {
      lastChar = parser.peek(offset).at(offset);
      offset += 1;
    } while (lastChar && isNumber(lastChar));

    return new T_LiteralValue(Number(parser.consume(offset).toString()));
  }

  private static parseDice(parser: Parser): Token | undefined {
    const diceDescription = new T_DiceDesription([]);
    while (!parser.isEOF()) {
      const char = parser.peek()[0];
      let newToken: Token | undefined;

      switch (true) {
        case isArithmaticOperator(char):
          return diceDescription;

        case isWhitespace(char):
          parser.consume();
          break;

        case isFudgeDice(char):
          parser.consume();
          diceDescription.setValue([...diceDescription.getValue(), new T_FudgeDice()])
          break;

        case isNumber(char):
          newToken = this.parseNumericToken(parser);
          if (newToken) {
            diceDescription.setValue([...diceDescription.getValue(), newToken]);
          }
          break;

        default:
          throw Error(
            `Unexpected character at position ${
              parser.getCurrentPosition() + 1
            } '${String.fromCharCode(char)}'`
          );
      }
    }

    return diceDescription;
  }
}
