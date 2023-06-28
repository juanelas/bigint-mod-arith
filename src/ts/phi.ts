export type PrimeFactorization = Array<[bigint, bigint]>

/**
 * A function that computes the Euler's totien function of a number n, whose prime power factorization is known
 *
 * @param primeFactorization an array of arrays containing the prime power factorization of a number n. For example, for n = (p1**k1)*(p2**k2)*...*(pr**kr), one should provide [[p1, k1], [p2, k2], ... , [pr, kr]]
 * @returns phi((p1**k1)*(p2**k2)*...*(pr**kr))
 */
export function phi (primeFactorization: PrimeFactorization): bigint {
  return primeFactorization.map(v => (v[0] ** (v[1] - 1n)) * (v[0] - 1n)).reduce((prev, curr) => {
    return curr * prev
  }, 1n)
}
