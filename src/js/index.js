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
export function abs (a) {
  if (a < 0) return -a
  return a
}

/**
 * Returns the bitlength of a number
 *
 * @param {number|bigint} a
 * @returns {number} - the bit length
 */
export function bitLength (a) {
  if (a == 1) return 1
  a = BigInt(a)

  let bits = 1
  do {
    bits++
  } while ((a >>= 1n) > 1n)

  return bits
}

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
export function eGcd (a, b) {
  if (a <= 0 | b <= 0) throw new RangeError('a and b MUST be > 0') // a and b MUST be positive

  a = BigInt(a)
  b = BigInt(b)

  let x = 0n
  let y = 1n
  let u = 1n
  let v = 0n

  while (a != 0) {
    const q = b / a
    const r = b % a
    const m = x - u * q
    const n = y - v * q
    b = a
    a = r
    x = u
    y = v
    u = m
    v = n
  }

  return {
    g: b,
    x: x,
    y: y
  }
}

/**
 * Greatest-common divisor of two integers based on the iterative binary algorithm.
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} The greatest common divisor of a and b
 */
export function gcd (a, b) {
  if (a == 0) return b
  if (b == 0) return a

  if (a < 0) a = -a
  if (b < 0) b = -b

  if (b > a) {
    const t = a
    a = b
    b = t
  }

  while (true) {
    if (b == 0) return a
    a %= b
    if (a == 0) return b
    b %= a
  }
}

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} The least common multiple of a and b
 */
export function lcm (a, b) {
  if (a == 0 && b == 0n) return 0n
  a = BigInt(a)
  b = BigInt(b)
  return abs(a * b) / gcd(a, b)
}

/**
 * Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<=b
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} maximum of numbers a and b
 */
export function max (a, b) {
  return a < b ? b : a
}

/**
 * Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} minimum of numbers a and b
 */
export function min (a, b) {
  return a < b ? a : b
}

/**
 * Modular inverse.
 *
 * @param {number|bigint} a The number to find an inverse for
 * @param {number|bigint} n The modulo
 *
 * @returns {bigint|NaN} the inverse modulo n or NaN if it does not exist
 */
export function modInv (a, n) {
  try {
    const egcd = eGcd(toZn(a, n), n)
    if (egcd.g != 1) return NaN // modular inverse does not exist

    return toZn(egcd.x, n)
  } catch (error) {
    return NaN
  }
}

/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method
 *
 * @param {number|bigint} b base
 * @param {number|bigint} e exponent
 * @param {number|bigint} n modulo
 *
 * @returns {bigint} b**e mod n
 */
export function modPow (b, e, n) {
  if (n == 0) return NaN
  if (n == 1) return 0n

  n = BigInt(n)
  b = toZn(b, n)
  e = BigInt(e)

  if (e < 0) return modInv(modPow(b, abs(e), n), n)

  let r = 1n
  while (e > 0) {
    if (e % 2n == 1) r = r * b % n

    e >>= 1n
    b = b * b % n
  }

  return r
}

/**
 * Finds the smallest positive element that is congruent to a in modulo n
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 *
 * @returns {bigint} The smallest positive representation of a in modulo n
 */
export function toZn (a, n) {
  if (n <= 0) return NaN

  a %= n
  return a < 0 ? a + n : a
}
