export type AnyObject = Record<string, unknown>;

export type EmptyObject = Record<string, never>;

export type StrictNonNullable = NonNullable<unknown>;

export type Merge<M, N> = N extends AnyObject ? M : Omit<M, keyof N> & N;
