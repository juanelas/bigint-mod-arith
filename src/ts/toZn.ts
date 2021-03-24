/**
 * Finds the smallest positive element that is congruent to a in modulo n
 *
 * @remarks
 * a and b must be the same type, either number or bigint
 *
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 *
 * @returns A bigint with the smallest positive representation of a modulo n or number NaN if n < 0
 */
export function toZn (a: number|bigint, n: number|bigint): bigint|number {
  if (typeof a === 'number') a = BigInt(a)
  if (typeof n === 'number') n = BigInt(n)

  if (n <= 0n) { return NaN }

  const aZn = a % n
  return (aZn < 0n) ? aZn + n : aZn
}
