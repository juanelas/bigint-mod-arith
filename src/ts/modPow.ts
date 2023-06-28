import { abs } from './abs.js'
import { crt } from './crt.js'
import { modInv } from './modInv.js'
import { PrimeFactorization, phi } from './phi.js'
import { toZn } from './toZn.js'

export type PrimePower = [number | bigint, number | bigint] // [p, k]   is for p**k
export type PrimeFactor = number | bigint | PrimePower

/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method if the prime factorization is not provided, or the chinese remainder theorem otherwise.
 *
 * @param b base
 * @param e exponent
 * @param n modulo
 * @param primeFactorization an array of the prime factors, for example [5n, 5n, 13n, 27n], or prime powers as [p, k], for instance [[5, 2], [13, 1], [27, 1]]. If the prime factorization is provided the chinese remainder theorem is used to greatly speed up the exponentiation.
 *
 * @throws {@link RangeError} if n <= 0
 *
 * @returns b**e mod n
 */
export function modPow (b: number | bigint, e: number | bigint, n: number | bigint, primeFactorization?: PrimeFactor[]): bigint {
  if (typeof b === 'number') b = BigInt(b)
  if (typeof e === 'number') e = BigInt(e)
  if (typeof n === 'number') n = BigInt(n)

  if (n <= 0n) {
    throw new RangeError('n must be > 0')
  } else if (n === 1n) {
    return 0n
  }

  b = toZn(b, n)

  if (e < 0n) {
    return modInv(modPow(b, abs(e), n, primeFactorization), n)
  }

  if (primeFactorization !== undefined) {
    return modPowWithFactorization(b, e, n, primePowerArguments(primeFactorization))
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

function primePowerArguments (primeFactors: PrimeFactor[]): PrimeFactorization {
  interface PrimePowers {
    [p: string]: {
      p: bigint
      k: bigint
    }
  }
  const primePowers: PrimePowers = {}
  primeFactors.forEach((primeFactor: PrimeFactor) => {
    if (typeof primeFactor === 'bigint' || typeof primeFactor === 'number') {
      const key = String(primeFactor)
      if (primePowers[key] === undefined) {
        primePowers[key] = { p: BigInt(primeFactor), k: 1n }
      } else {
        primePowers[key].k += 1n
      }
    } else {
      const key = String(primeFactor[0])
      if (primePowers[key] === undefined) {
        primePowers[key] = { p: BigInt(primeFactor[0]), k: BigInt(primeFactor[1]) }
      } else {
        primePowers[key].k += BigInt(primeFactor[1])
      }
    }
  })
  return Object.values(primePowers).map(val => [val.p, val.k])
}

function modPowWithFactorization (b: bigint, e: bigint, n: bigint, primeFactorization: PrimeFactorization): bigint {
  const mods = primeFactorization.map(v => v[0] ** v[1])
  const phis = primeFactorization.map(v => phi([v]))
  const remainders = phis.map((phi, i) => modPow(b, e % phi, mods[i]))

  return crt(remainders, mods, n)
}
