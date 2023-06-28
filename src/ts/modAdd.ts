import { toZn } from './toZn.js'

/**
 * Modular addition of (a_1 + ... + a_r) mod n
 * @param addends an array of the numbers a_i to add. For example [3, 12353251235n, 1243, -12341232545990n]
 * @param n the modulo
 * @returns The smallest positive integer that is congruent with (a_1 + ... + a_r) mod n
 */
export function modAdd (addends: Array<number | bigint>, n: number | bigint): bigint {
  const mod = BigInt(n)
  const as = addends.map(a => BigInt(a) % mod)
  return toZn(as.reduce((sum, a) => sum + a % mod, 0n), mod)
}
