'use strict';

/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *  
 * @param {number|bigint} a 
 * 
 * @returns {bigint} the absolute value of a
 */
const abs = function (a) {
	a = BigInt(a);
	return (a >= 0n) ? a : -a;
};

/**
 * Greatest-common divisor of two integers based on the iterative binary algorithm.
 * 
 * @param {number|bigint} a 
 * @param {number|bigint} b 
 * 
 * @returns {bigint} The greatest common divisor of a and b
 */
const gcd = function (a, b) {
	a = abs(a);
	b = abs(b);
	let shift = 0n;
	while (!((a | b) & 1n)) {
		a >>= 1n;
		b >>= 1n;
		shift++;
	}
	while (!(a & 1n)) a >>= 1n;
	do {
		while (!(b & 1n)) b >>= 1n;
		if (a > b) {
			let x = a;
			a = b;
			b = x;
		}
		b -= a;
	} while (b);

	// rescale
	return a << shift;
};

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param {number|bigint} a 
 * @param {number|bigint} b 
 * 
 * @returns {bigint} The least common multiple of a and b
 */
const lcm = function (a, b) {
	a = BigInt(a);
	b = BigInt(b);
	return abs(a * b) / gcd(a, b);
};

/**
 * Finds the smallest positive element that is congruent to a in modulo n
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 * 
 * @returns {bigint} The smallest positive representation of a in modulo n
 */
const toZn = function (a, n) {
	n = BigInt(n);
	a = BigInt(a) % n;
	return (a < 0) ? a + n : a;
};

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
const eGcd = function (a, b) {
	a = BigInt(a);
	b = BigInt(b);
	let x = 0n;
	let y = 1n;
	let u = 1n;
	let v = 0n;

	while (a !== 0n) {
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
	}
};

/**
 * Modular inverse.
 * 
 * @param {number|bigint} a The number to find an inverse for
 * @param {number|bigint} n The modulo
 * 
 * @returns {bigint} the inverse modulo n
 */
const modInv = function (a, n) {
	let egcd = eGcd(a, n);
	if (egcd.b !== 1n) {
		return null; // modular inverse does not exist
	} else {
		return toZn(egcd.x, n);
	}
};

/**
 * Modular exponentiation a**b mod n
 * @param {number|bigint} a base
 * @param {number|bigint} b exponent
 * @param {number|bigint} n modulo
 * 
 * @returns {bigint} a**b mod n
 */
const modPow = function (a, b, n) {
	// See Knuth, volume 2, section 4.6.3.
	n = BigInt(n);
	a = toZn(a, n);
	b = BigInt(b);
	if (b < 0n) {
		return modInv(modPow(a, abs(b), n), n);
	}
	let result = 1n;
	let x = a;
	while (b > 0) {
		var leastSignificantBit = b % 2n;
		b = b / 2n;
		if (leastSignificantBit == 1n) {
			result = result * x;
			result = result % n;
		}
		x = x * x;
		x = x % n;
	}
	return result;
};

module.exports = {
	abs: abs,
	gcd: gcd,
	lcm: lcm,
	modInv: modInv,
	modPow: modPow
};