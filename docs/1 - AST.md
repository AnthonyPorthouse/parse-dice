# AST

When parsing a dice string we first need to break it down into its core components using an Abstract Syntax Tree.

## Components

`4d6 + 4` would become:

```json
{
    "type": "Roll",
    "values": [
        {
            "type": "DiceDescription",
            "values": [
                {
                    "type": "RollTimes",
                    "value": 4
                },
                {
                    "type": "StandardDice",
                    "value": 6
                }
            ]
        },
        {
            "type": "ArithmaticOperator",
            "value": "+"
        },
        {
            "type": "LiteralValue",
            "value": 4
        }
    ]
}
```
