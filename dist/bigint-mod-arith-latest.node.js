'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const _ZERO = BigInt(0);
const _ONE = BigInt(1);
const _TWO = BigInt(2);

/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *  
 * @param {number|bigint} a 
 * 
 * @returns {bigint} the absolute value of a
 */
function abs(a) {
    a = BigInt(a);
    return (a >= _ZERO) ? a : -a;
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
 * @returns {egcdReturn}
 */
function eGcd(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    let x = _ZERO;
    let y = _ONE;
    let u = _ONE;
    let v = _ZERO;

    while (a !== _ZERO) {
        let q = b / a;
        let r = b % a;
        let m = x - (u * q);
        let n = y - (v * q);
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    return {
        b: b,
        x: x,
        y: y
    };
}

/**
 * Greatest-common divisor of two integers based on the iterative binary algorithm.
 * 
 * @param {number|bigint} a 
 * @param {number|bigint} b 
 * 
 * @returns {bigint} The greatest common divisor of a and b
 */
function gcd(a, b) {
    a = abs(a);
    b = abs(b);
    let shift = _ZERO;
    while (!((a | b) & _ONE)) {
        a >>= _ONE;
        b >>= _ONE;
        shift++;
    }
    while (!(a & _ONE)) a >>= _ONE;
    do {
        while (!(b & _ONE)) b >>= _ONE;
        if (a > b) {
            let x = a;
            a = b;
            b = x;
        }
        b -= a;
    } while (b);

    // rescale
    return a << shift;
}

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param {number|bigint} a 
 * @param {number|bigint} b 
 * 
 * @returns {bigint} The least common multiple of a and b
 */
function lcm(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    return abs(a * b) / gcd(a, b);
}

/**
 * Modular inverse.
 * 
 * @param {number|bigint} a The number to find an inverse for
 * @param {number|bigint} n The modulo
 * 
 * @returns {bigint} the inverse modulo n
 */
function modInv(a, n) {
    let egcd = eGcd(a, n);
    if (egcd.b !== _ONE) {
        return null; // modular inverse does not exist
    } else {
        return toZn(egcd.x, n);
    }
}

/**
 * Modular exponentiation a**b mod n
 * @param {number|bigint} a base
 * @param {number|bigint} b exponent
 * @param {number|bigint} n modulo
 * 
 * @returns {bigint} a**b mod n
 */
function modPow(a, b, n) {
    // See Knuth, volume 2, section 4.6.3.
    n = BigInt(n);
    a = toZn(a, n);
    b = BigInt(b);
    if (b < _ZERO) {
        return modInv(modPow(a, abs(b), n), n);
    }
    let result = _ONE;
    let x = a;
    while (b > 0) {
        var leastSignificantBit = b % _TWO;
        b = b / _TWO;
        if (leastSignificantBit == _ONE) {
            result = result * x;
            result = result % n;
        }
        x = x * x;
        x = x % n;
    }
    return result;
}

/**
 * Finds the smallest positive element that is congruent to a in modulo n
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 * 
 * @returns {bigint} The smallest positive representation of a in modulo n
 */
function toZn(a, n) {
    n = BigInt(n);
    a = BigInt(a) % n;
    return (a < 0) ? a + n : a;
}

exports.abs = abs;
exports.eGcd = eGcd;
exports.gcd = gcd;
exports.lcm = lcm;
exports.modInv = modInv;
exports.modPow = modPow;
exports.toZn = toZn;
