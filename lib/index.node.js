'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

const _ZERO = BigInt(0)
const _ONE = BigInt(1)
const _TWO = BigInt(2)

/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *
 * @param {number|bigint} a
 *
 * @returns {bigint} the absolute value of a
 */
function abs (a) {
  a = BigInt(a)
  return (a >= _ZERO) ? a : -a
}

/**
 * Returns the bitlength of a number
 *
 * @param {number|bigint} a
 * @returns {number} - the bit length
 */
function bitLength (a) {
  a = BigInt(a)
  if (a === _ONE) { return 1 }
  let bits = 1
  do {
    bits++
  } while ((a >>= _ONE) > _ONE)
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
function eGcd (a, b) {
  a = BigInt(a)
  b = BigInt(b)
  if (a <= _ZERO | b <= _ZERO) { return NaN } // a and b MUST be positive

  let x = _ZERO
  let y = _ONE
  let u = _ONE
  let v = _ZERO

  while (a !== _ZERO) {
    const q = b / a
    const r = b % a
    const m = x - (u * q)
    const n = y - (v * q)
    b = a
    a = r
    x = u
    y = v
    u = m
    v = n
  }
  return {
    b: b,
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
function gcd (a, b) {
  a = abs(a)
  b = abs(b)
  if (a === _ZERO) { return b } else if (b === _ZERO) { return a }

  let shift = _ZERO
  while (!((a | b) & _ONE)) {
    a >>= _ONE
    b >>= _ONE
    shift++
  }
  while (!(a & _ONE)) a >>= _ONE
  do {
    while (!(b & _ONE)) b >>= _ONE
    if (a > b) {
      const x = a
      a = b
      b = x
    }
    b -= a
  } while (b)

  // rescale
  return a << shift
}

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} The least common multiple of a and b
 */
function lcm (a, b) {
  a = BigInt(a)
  b = BigInt(b)
  if (a === _ZERO && b === _ZERO) { return _ZERO }
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
function max (a, b) {
  a = BigInt(a)
  b = BigInt(b)
  return (a >= b) ? a : b
}

/**
 * Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 *
 * @returns {bigint} minimum of numbers a and b
 */
function min (a, b) {
  a = BigInt(a)
  b = BigInt(b)
  return (a >= b) ? b : a
}

/**
 * Modular inverse.
 *
 * @param {number|bigint} a The number to find an inverse for
 * @param {number|bigint} n The modulo
 *
 * @returns {bigint} the inverse modulo n or NaN if it does not exist
 */
function modInv (a, n) {
  const egcd = eGcd(toZn(a, n), n)
  if (egcd.b !== _ONE) {
    return NaN // modular inverse does not exist
  } else {
    return toZn(egcd.x, n)
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
function modPow (b, e, n) {
  n = BigInt(n)
  if (n === _ZERO) { return NaN } else if (n === _ONE) { return _ZERO }

  b = toZn(b, n)

  e = BigInt(e)
  if (e < _ZERO) {
    return modInv(modPow(b, abs(e), n), n)
  }

  let r = _ONE
  while (e > 0) {
    if ((e % _TWO) === _ONE) {
      r = (r * b) % n
    }
    e = e / _TWO
    b = b ** _TWO % n
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
function toZn (a, n) {
  n = BigInt(n)
  if (n <= 0) { return NaN }

  a = BigInt(a) % n
  return (a < 0) ? a + n : a
}

exports.abs = abs
exports.bitLength = bitLength
exports.eGcd = eGcd
exports.gcd = gcd
exports.lcm = lcm
exports.max = max
exports.min = min
exports.modInv = modInv
exports.modPow = modPow
exports.toZn = toZn
