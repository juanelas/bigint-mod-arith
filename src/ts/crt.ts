import { modInv } from './modInv.js'
import { toZn } from './toZn.js'

/**
 * Chinese remainder theorem states that if one knows the remainders of the Euclidean division of an integer n by several integers, then one can determine uniquely the remainder of the division of n by the product of these integers, under the condition that the divisors are pairwise coprime (no two divisors share a common factor other than 1). Provided that n_i are pairwise coprime, and a_i any integers, this function returns a solution for the following system of equations:
    x ≡ a_1 mod n_1
    x ≡ a_2 mod n_2
    ⋮
    x ≡ a_k mod n_k
 *
 * @param remainders the array of remainders a_i. For example [17n, 243n, 344n]
 * @param modulos the array of modulos n_i. For example [769n, 2017n, 47701n]
 * @param modulo the product of all modulos. Provided here just to save some operations if it is already known
 * @returns x
 */
export function crt (
  remainders: bigint[],
  modulos: bigint[],
  modulo?: bigint
): bigint {
  if (remainders.length !== modulos.length) {
    throw new RangeError('The remainders and modulos arrays should have the same length')
  }

  const product = modulo ?? modulos.reduce((acc, val) => acc * val, 1n)

  return modulos.reduce((sum, mod, index) => {
    const partialProduct = product / mod
    const inverse = modInv(partialProduct, mod)
    const toAdd = ((partialProduct * inverse) % product * remainders[index]) % product
    return toZn(sum + toAdd, product)
  }, 0n)
}
