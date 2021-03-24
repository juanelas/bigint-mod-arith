import { eGcd } from './egcd'
import { toZn } from './toZn'
/**
 * Modular inverse.
 *
 * @param a The number to find an inverse for
 * @param n The modulo
 *
 * @returns The inverse modulo n or number NaN if it does not exist
 */
export function modInv (a: number|bigint, n: number|bigint): bigint|number {
  try {
    const egcd = eGcd(toZn(a, n), n)
    if (egcd.g !== 1n) {
      return NaN // modular inverse does not exist
    } else {
      return toZn(egcd.x, n)
    }
  } catch (error) {
    return NaN
  }
}
