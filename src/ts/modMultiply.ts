import { toZn } from './toZn.js'

/**
* Modular addition of (a_1 * ... * a_r) mod n
 * @param factors an array of the numbers a_i to multiply. For example [3, 12353251235n, 1243, -12341232545990n]
 * @param n the modulo
 * @returns The smallest positive integer that is congruent with (a_1 * ... * a_r) mod n
 */
export function modMultiply (factors: Array<number | bigint>, n: number | bigint): bigint {
  const mod = BigInt(n)
  const as = factors.map(a => BigInt(a) % mod)
  return toZn(as.reduce((prod, a) => prod * a % mod, 1n), mod)
}
