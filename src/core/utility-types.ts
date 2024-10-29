/**
 * empty object
 */
export type EmptyObject = Record<string, never>;

/**
 * any non-nullish value
 */
export type StrictNonNullable = NonNullable<unknown>;
