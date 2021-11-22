type Replacer = (value: string, items: Array<string | number> | unknown) => string;
type Items = unknown | (string | number)[];

export { Replacer, Items };
