export interface Egcd {
  g: bigint
  x: bigint
  y: bigint
}
/**
 * An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
 * Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).
 *
 * @param a
 * @param b
 *
 * @returns A triple (g, x, y), such that ax + by = g = gcd(a, b).
 */
export function eGcd (a: number|bigint, b: number|bigint): Egcd {
  let aBigint = BigInt(a)
  let bBigInt = BigInt(b)
  if (aBigint <= 0n || bBigInt <= 0n) throw new RangeError('a and b MUST be > 0') // a and b MUST be positive

  let x = 0n
  let y = 1n
  let u = 1n
  let v = 0n

  while (aBigint !== 0n) {
    const q = bBigInt / aBigint
    const r = bBigInt % aBigint
    const m = x - (u * q)
    const n = y - (v * q)
    bBigInt = aBigint
    aBigint = r
    x = u
    y = v
    u = m
    v = n
  }
  return {
    g: bBigInt,
    x: x,
    y: y
  }
}
