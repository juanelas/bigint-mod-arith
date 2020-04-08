/**
 * A triple (g, x, y), such that ax + by = g = gcd(a, b).
 */
export type egcdReturn = {
    g: bigint;
    x: bigint;
    y: bigint;
};
/**
 * Some common functions for modular arithmetic using native JS implementation of BigInt
 * @module bigint-mod-arith
 */
/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *
 * @param {number|bigint} a
 *
 * @returns {bigint} the absolute value of a
 */
export function abs(a: number | bigint): bigint;
/**
 * Returns the bitlength of a number
 *
 * @param {number|bigint} a
 * @returns {number} - the bit length
 */
export function bitLength(a: number | bigint): number;
/**
 * @typedef {Object} egcdReturn A triple (g, x, y), such that ax + by = g = gcd(a, b).
 * @property {bigint} g
 * @property {bigint} x
 * @property {bigint} y
 */
/**
 * An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
 * Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {egcdReturn} A triple (g, x, y), such that ax + by = g = gcd(a, b).
 */
export function eGcd(a: number | bigint, b: number | bigint): egcdReturn;
/**
 * Greatest-common divisor of two integers based on the iterative binary algorithm.
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} The greatest common divisor of a and b
 */
export function gcd(a: number | bigint, b: number | bigint): bigint;
/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} The least common multiple of a and b
 */
export function lcm(a: number | bigint, b: number | bigint): bigint;
/**
 * Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<=b
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} maximum of numbers a and b
 */
export function max(a: number | bigint, b: number | bigint): bigint;
/**
 * Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} minimum of numbers a and b
 */
export function min(a: number | bigint, b: number | bigint): bigint;
/**
 * Modular inverse.
 *
 * @param {number|bigint} a The number to find an inverse for
 * @param {number|bigint} n The modulo
 *
 * @returns {bigint} the inverse modulo n or NaN if it does not exist
 */
export function modInv(a: number | bigint, n: number | bigint): bigint;
/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method
 *
 * @param {number|bigint} b base
 * @param {number|bigint} e exponent
 * @param {number|bigint} n modulo
 *
 * @returns {bigint} b**e mod n
 */
export function modPow(b: number | bigint, e: number | bigint, n: number | bigint): bigint;
/**
 * Finds the smallest positive element that is congruent to a in modulo n
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 *
 * @returns {bigint} The smallest positive representation of a in modulo n
 */
export function toZn(a: number | bigint, n: number | bigint): bigint;
