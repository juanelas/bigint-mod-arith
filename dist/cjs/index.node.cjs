'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *
 * @param a
 *
 * @returns The absolute value of a
 */
function abs(a) {
    return (a >= 0) ? a : -a;
}

/**
 * Returns the bitlength of a number
 *
 * @param a
 * @returns The bit length
 */
function bitLength(a) {
    a = BigInt(a);
    if (a === 1n) {
        return 1;
    }
    let bits = 1;
    do {
        bits++;
    } while ((a >>= 1n) > 1n);
    return bits;
}

/**
 * An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
 * Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).
 *
 * @param a
 * @param b
 *
 * @returns A triple (g, x, y), such that ax + by = g = gcd(a, b).
 */
function eGcd(a, b) {
    let aBigint = BigInt(a);
    let bBigInt = BigInt(b);
    if (aBigint <= 0n || bBigInt <= 0n)
        throw new RangeError('a and b MUST be > 0'); // a and b MUST be positive
    let x = 0n;
    let y = 1n;
    let u = 1n;
    let v = 0n;
    while (aBigint !== 0n) {
        const q = bBigInt / aBigint;
        const r = bBigInt % aBigint;
        const m = x - (u * q);
        const n = y - (v * q);
        bBigInt = aBigint;
        aBigint = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    return {
        g: bBigInt,
        x: x,
        y: y
    };
}

/**
 * Greatest-common divisor of two integers based on the iterative binary algorithm.
 *
 * @param a
 * @param b
 *
 * @returns The greatest common divisor of a and b
 */
function gcd(a, b) {
    let aAbs = BigInt(abs(a));
    let bAbs = BigInt(abs(b));
    if (aAbs === 0n) {
        return bAbs;
    }
    else if (bAbs === 0n) {
        return aAbs;
    }
    let shift = 0n;
    while (((aAbs | bAbs) & 1n) === 0n) {
        aAbs >>= 1n;
        bAbs >>= 1n;
        shift++;
    }
    while ((aAbs & 1n) === 0n)
        aAbs >>= 1n;
    do {
        while ((bAbs & 1n) === 0n)
            bAbs >>= 1n;
        if (aAbs > bAbs) {
            const x = aAbs;
            aAbs = bAbs;
            bAbs = x;
        }
        bAbs -= aAbs;
    } while (bAbs !== 0n);
    // rescale
    return aAbs << shift;
}

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param a
 * @param b
 *
 * @returns The least common multiple of a and b
 */
function lcm(a, b) {
    const aBigInt = BigInt(a);
    const bBigInt = BigInt(b);
    if (aBigInt === 0n && bBigInt === 0n)
        return BigInt(0);
    return abs(aBigInt * bBigInt) / gcd(aBigInt, bBigInt);
}

/**
 * Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<=b
 *
 * @param a
 * @param b
 *
 * @returns Maximum of numbers a and b
 */
function max(a, b) {
    return (a >= b) ? a : b;
}

/**
 * Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b
 *
 * @param a
 * @param b
 *
 * @returns Minimum of numbers a and b
 */
function min(a, b) {
    return (a >= b) ? b : a;
}

/**
 * Finds the smallest positive element that is congruent to a in modulo n
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 *
 * @returns The smallest positive representation of a in modulo n or number NaN if n < 0
 */
function toZn(a, n) {
    const nBigInt = BigInt(n);
    if (n <= 0) {
        return NaN;
    }
    const aZn = BigInt(a) % nBigInt;
    return (aZn < 0n) ? aZn + nBigInt : aZn;
}

/**
 * Modular inverse.
 *
 * @param a The number to find an inverse for
 * @param n The modulo
 *
 * @returns The inverse modulo n or number NaN if it does not exist
 */
function modInv(a, n) {
    try {
        const egcd = eGcd(toZn(a, n), n);
        if (egcd.g !== 1n) {
            return NaN; // modular inverse does not exist
        }
        else {
            return toZn(egcd.x, n);
        }
    }
    catch (error) {
        return NaN;
    }
}

/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method
 *
 * @param b base
 * @param e exponent
 * @param n modulo
 *
 * @returns b**e mod n or number NaN if n <= 0
 */
function modPow(b, e, n) {
    const nBigInt = BigInt(n);
    if (nBigInt <= 0n) {
        return NaN;
    }
    else if (nBigInt === 1n) {
        return BigInt(0);
    }
    let bZn = toZn(b, nBigInt);
    e = BigInt(e);
    if (e < 0n) {
        return modInv(modPow(bZn, abs(e), nBigInt), nBigInt);
    }
    let r = 1n;
    while (e > 0) {
        if ((e % 2n) === 1n) {
            r = (r * bZn) % nBigInt;
        }
        e = e / 2n;
        bZn = bZn ** 2n % nBigInt;
    }
    return r;
}

exports.abs = abs;
exports.bitLength = bitLength;
exports.eGcd = eGcd;
exports.gcd = gcd;
exports.lcm = lcm;
exports.max = max;
exports.min = min;
exports.modInv = modInv;
exports.modPow = modPow;
exports.toZn = toZn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9hYnMudHMiLCIuLi8uLi9zcmMvdHMvYml0TGVuZ3RoLnRzIiwiLi4vLi4vc3JjL3RzL2VnY2QudHMiLCIuLi8uLi9zcmMvdHMvZ2NkLnRzIiwiLi4vLi4vc3JjL3RzL2xjbS50cyIsIi4uLy4uL3NyYy90cy9tYXgudHMiLCIuLi8uLi9zcmMvdHMvbWluLnRzIiwiLi4vLi4vc3JjL3RzL3RvWm4udHMiLCIuLi8uLi9zcmMvdHMvbW9kSW52LnRzIiwiLi4vLi4vc3JjL3RzL21vZFBvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7O1NBT2dCLEdBQUcsQ0FBRSxDQUFnQjtJQUNuQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDMUI7O0FDVEE7Ozs7OztTQU1nQixTQUFTLENBQUUsQ0FBZ0I7SUFDekMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFBO0tBQUU7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO0lBQ1osR0FBRztRQUNELElBQUksRUFBRSxDQUFBO0tBQ1AsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDO0lBQ3pCLE9BQU8sSUFBSSxDQUFBO0FBQ2I7O0FDVEE7Ozs7Ozs7OztTQVNnQixJQUFJLENBQUUsQ0FBZ0IsRUFBRSxDQUFnQjtJQUN0RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZCLElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxPQUFPLElBQUksRUFBRTtRQUFFLE1BQU0sSUFBSSxVQUFVLENB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
