import { is } from "ramda"
/**
 *
 * UTILS
 */

export const convertToRem = (n: number | string): string | number =>
  is(Number, n) && n != 0 ? `${(n as number) / 16}rem` : n
