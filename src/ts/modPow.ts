import { abs } from './abs'
import { modInv } from './modInv'
import { toZn } from './toZn'
/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method
 *
 * @param b base
 * @param e exponent
 * @param n modulo
 *
 * @returns b**e mod n or number NaN if n <= 0
 */
export function modPow (b: number|bigint, e: number|bigint, n: number|bigint): bigint|number {
  const nBigInt = BigInt(n)
  if (nBigInt <= 0n) { return NaN } else if (nBigInt === 1n) { return BigInt(0) }

  let bZn = toZn(b, nBigInt)

  e = BigInt(e)
  if (e < 0n) {
    return modInv(modPow(bZn, abs(e), nBigInt), nBigInt)
  }

  let r = 1n
  while (e > 0) {
    if ((e % 2n) === 1n) {
      r = (r * (bZn as bigint)) % nBigInt
    }
    e = e / 2n
    bZn = bZn as bigint ** 2n % nBigInt
  }
  return r
}
