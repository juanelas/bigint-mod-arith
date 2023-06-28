/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *
 * @param a
 *
 * @returns The absolute value of a
 */
declare function abs(a: number | bigint): number | bigint;

/**
 * Returns the (minimum) length of a number expressed in bits.
 *
 * @param a
 * @returns The bit length
 */
declare function bitLength(a: number | bigint): number;

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
declare function crt(remainders: bigint[], modulos: bigint[], modulo?: bigint): bigint;

interface Egcd {
    g: bigint;
    x: bigint;
    y: bigint;
}
/**
 * An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
 * Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).
 *
 * @param a
 * @param b
 *
 * @throws {@link RangeError} if a or b are <= 0
 *
 * @returns A triple (g, x, y), such that ax + by = g = gcd(a, b).
 */
declare function eGcd(a: number | bigint, b: number | bigint): Egcd;

/**
 * Greatest common divisor of two integers based on the iterative binary algorithm.
 *
 * @param a
 * @param b
 *
 * @returns The greatest common divisor of a and b
 */
declare function gcd(a: number | bigint, b: number | bigint): bigint;

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param a
 * @param b
 *
 * @returns The least common multiple of a and b
 */
declare function lcm(a: number | bigint, b: number | bigint): bigint;

/**
 * Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<b
 *
 * @param a
 * @param b
 *
 * @returns Maximum of numbers a and b
 */
declare function max(a: number | bigint, b: number | bigint): number | bigint;

/**
 * Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<b
 *
 * @param a
 * @param b
 *
 * @returns Minimum of numbers a and b
 */
declare function min(a: number | bigint, b: number | bigint): number | bigint;

/**
 * Modular addition of (a_1 + ... + a_r) mod n
 * @param addends an array of the numbers a_i to add. For example [3, 12353251235n, 1243, -12341232545990n]
 * @param n the modulo
 * @returns The smallest positive integer that is congruent with (a_1 + ... + a_r) mod n
 */
declare function modAdd(addends: Array<number | bigint>, n: number | bigint): bigint;

/**
 * Modular inverse.
 *
 * @param a The number to find an inverse for
 * @param n The modulo
 *
 * @throws {@link RangeError} if a does not have inverse modulo n
 *
 * @returns The inverse modulo n
 */
declare function modInv(a: number | bigint, n: number | bigint): bigint;

/**
* Modular addition of (a_1 * ... * a_r) mod n
 * @param factors an array of the numbers a_i to multiply. For example [3, 12353251235n, 1243, -12341232545990n]
 * @param n the modulo
 * @returns The smallest positive integer that is congruent with (a_1 * ... * a_r) mod n
 */
declare function modMultiply(factors: Array<number | bigint>, n: number | bigint): bigint;

type PrimePower = [number | bigint, number | bigint];
type PrimeFactor = number | bigint | PrimePower;
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
declare function modPow(b: number | bigint, e: number | bigint, n: number | bigint, primeFactorization?: PrimeFactor[]): bigint;

type PrimeFactorization = Array<[bigint, bigint]>;
/**
 * A function that computes the Euler's totien function of a number n, whose prime power factorization is known
 *
 * @param primeFactorization an array of arrays containing the prime power factorization of a number n. For example, for n = (p1**k1)*(p2**k2)*...*(pr**kr), one should provide [[p1, k1], [p2, k2], ... , [pr, kr]]
 * @returns phi((p1**k1)*(p2**k2)*...*(pr**kr))
 */
declare function phi(primeFactorization: PrimeFactorization): bigint;

/**
 * Finds the smallest positive element that is congruent to a in modulo n
 *
 * @remarks
 * a and b must be the same type, either number or bigint
 *
 * @param a - An integer
 * @param n - The modulo
 *
 * @throws {@link RangeError} if n <= 0
 *
 * @returns A bigint with the smallest positive representation of a modulo n
 */
declare function toZn(a: number | bigint, n: number | bigint): bigint;

export { Egcd, PrimeFactor, PrimeFactorization, PrimePower, abs, bitLength, crt, eGcd, gcd, lcm, max, min, modAdd, modInv, modMultiply, modPow, phi, toZn };
