import { Parser } from "./parser.js";
import { describe, test, expect, beforeEach } from "vitest";
import { T_Roll } from "./tokens/roll.js";
import { T_LiteralValue } from "./tokens/literal_value.js";
import { T_MathDesription } from "./tokens/math_description.js";

describe(Parser.parse, () => {
    test('@', async () => {
        expect(() => Parser.parse(' @ ')).toThrowError("Unexpected character at position 2 '@'") ;
    })

    test('4',async () => {
        const result = Parser.parse('4');
        expect(result).toMatchObject(new T_Roll([new T_LiteralValue(4)]))
        expect(result.toString()).toBe('4')
    })

    test('4 + 2', async () => {
        const roll = Parser.parse('4 + 2')
        expect(roll).toMatchObject(new T_Roll([
            new T_LiteralValue(4),
            new T_MathDesription('+'),
            new T_LiteralValue(2),
        ]));

        expect(roll.toString()).toBe('4 + 2')
    })

    test('4 - 2', async () => {
        const roll = Parser.parse('4 - 2')
        expect(roll).toMatchObject(new T_Roll([
            new T_LiteralValue(4),
            new T_MathDesription('-'),
            new T_LiteralValue(2),
        ]));

        expect(roll.toString()).toBe('4 - 2')
    })

  test.skip("4d6 + 4", async() => {
    expect(Parser.parse("4d6 + 4")).toMatchObject({
      type: "Roll",
      values: [
        {
          type: "DiceDescription",
          values: [
            {
              type: "RollTimes",
              value: 4,
            },
            {
              type: "StandardDice",
              value: 6,
            },
          ],
        },
        {
          type: "MathDescription",
          value: "+",
        },
        {
          type: "DiceDescription",
          values: [
            {
              type: "LiteralValue",
              value: 4,
            },
          ],
        },
      ],
    });
  });
});

describe(Parser, () => {
  let parser: Parser;

  beforeEach(() => {
    parser = new Parser("ABCD");
  });

  test("peek()", async () => {
    expect(parser.peek()).toEqual(Buffer.from("A"));
  });

  test("peek(2)", async () => {
    expect(parser.peek(2)).toEqual(Buffer.from("AB"));
  });

  test("consume()", async () => {
    expect(parser.consume()).toEqual(Buffer.from("A"));
    expect(parser.peek()).toEqual(Buffer.from("B"));
  });

  test("consume(2)", async () => {
    expect(parser.consume(2)).toEqual(Buffer.from("AB"));
    expect(parser.peek()).toEqual(Buffer.from("C"));
  });

  test("isEOF()", async () => {
    expect(parser.isEOF()).toBe(false);
    parser.consume(4);
    expect(parser.isEOF()).toBe(true);
  });

  test("getOriginalInput()", async () => {
    expect(parser.getOriginalInput().toString()).toBe("ABCD");
  });
});
