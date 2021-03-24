/**
 * Finds the smallest positive element that is congruent to a in modulo n
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 *
 * @returns The smallest positive representation of a in modulo n or number NaN if n < 0
 */
export function toZn (a: number|bigint, n: number|bigint): bigint|number {
  const nBigInt = BigInt(n)
  if (n <= 0) { return NaN }

  const aZn = BigInt(a) % nBigInt
  return (aZn < 0n) ? aZn + nBigInt : aZn
}
