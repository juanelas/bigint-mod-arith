/**
 * Returns the bitlength of a number
 *
 * @param a
 * @returns The bit length
 */
export function bitLength (a: number|bigint): number {
  if (typeof a === 'number') a = BigInt(a)

  if (a === 1n) { return 1 }
  let bits = 1
  do {
    bits++
  } while ((a >>= 1n) > 1n)
  return bits
}
