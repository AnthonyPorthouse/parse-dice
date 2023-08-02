
type TokenSubtype = Token[] | Token | number | string | boolean
export abstract class Token {
  protected value;

  constructor(value: TokenSubtype) {
    this.value = value;
  }

  abstract getValue(): TokenSubtype;

  setValue(value: TokenSubtype): this {
    this.value = value;
    return this;
  }

  abstract toJSON(): object;

  abstract toString(): string;
}
