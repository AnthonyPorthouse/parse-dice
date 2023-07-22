export abstract class Token {

    protected value;

    constructor(value: number|string|Token[]) {
        this.value = value;
    }

    abstract getValue(): number|string|Token[];

    setValue(value: number|string|Token[]): this {
        this.value = value;
        return this;
    }

    abstract toJSON(): object;

    abstract toString(): string;
}
