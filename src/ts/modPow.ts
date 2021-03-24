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
  if (typeof b === 'number') b = BigInt(b)
  if (typeof e === 'number') e = BigInt(e)
  if (typeof n === 'number') n = BigInt(n)

  if (n <= 0n) { return NaN } else if (n === 1n) { return BigInt(0) }

  b = toZn(b, n) as bigint

  if (e < 0n) {
    return modInv(modPow(b, abs(e), n), n)
  }

  let r = 1n
  while (e > 0) {
    if ((e % 2n) === 1n) {
      r = r * b % n
    }
    e = e / 2n
    b = b ** 2n % n
  }
  return r
}
