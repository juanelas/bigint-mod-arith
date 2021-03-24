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
    if (typeof a === 'number')
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
    if (typeof a === 'number')
        a = BigInt(a);
    if (typeof b === 'number')
        b = BigInt(b);
    if (a <= 0n || b <= 0n)
        throw new RangeError('a and b MUST be > 0'); // a and b MUST be positive
    let x = 0n;
    let y = 1n;
    let u = 1n;
    let v = 0n;
    while (a !== 0n) {
        const q = b / a;
        const r = b % a;
        const m = x - (u * q);
        const n = y - (v * q);
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    return {
        g: b,
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
    let aAbs = (typeof a === 'number') ? BigInt(abs(a)) : abs(a);
    let bAbs = (typeof b === 'number') ? BigInt(abs(b)) : abs(b);
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
    if (typeof a === 'number')
        a = BigInt(a);
    if (typeof b === 'number')
        b = BigInt(b);
    if (a === 0n && b === 0n)
        return BigInt(0);
    return abs(a * b) / gcd(a, b);
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
 *
 * @remarks
 * a and b must be the same type, either number or bigint
 *
 * @param {number|bigint} a An integer
 * @param {number|bigint} n The modulo
 *
 * @returns A bigint with the smallest positive representation of a modulo n or number NaN if n < 0
 */
function toZn(a, n) {
    if (typeof a === 'number')
        a = BigInt(a);
    if (typeof n === 'number')
        n = BigInt(n);
    if (n <= 0n) {
        return NaN;
    }
    const aZn = a % n;
    return (aZn < 0n) ? aZn + n : aZn;
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
    if (typeof b === 'number')
        b = BigInt(b);
    if (typeof e === 'number')
        e = BigInt(e);
    if (typeof n === 'number')
        n = BigInt(n);
    if (n <= 0n) {
        return NaN;
    }
    else if (n === 1n) {
        return BigInt(0);
    }
    b = toZn(b, n);
    if (e < 0n) {
        return modInv(modPow(b, abs(e), n), n);
    }
    let r = 1n;
    while (e > 0) {
        if ((e % 2n) === 1n) {
            r = r * b % n;
        }
        e = e / 2n;
        b = b ** 2n % n;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9hYnMudHMiLCIuLi8uLi9zcmMvdHMvYml0TGVuZ3RoLnRzIiwiLi4vLi4vc3JjL3RzL2VnY2QudHMiLCIuLi8uLi9zcmMvdHMvZ2NkLnRzIiwiLi4vLi4vc3JjL3RzL2xjbS50cyIsIi4uLy4uL3NyYy90cy9tYXgudHMiLCIuLi8uLi9zcmMvdHMvbWluLnRzIiwiLi4vLi4vc3JjL3RzL3RvWm4udHMiLCIuLi8uLi9zcmMvdHMvbW9kSW52LnRzIiwiLi4vLi4vc3JjL3RzL21vZFBvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7O1NBT2dCLEdBQUcsQ0FBRSxDQUFnQjtJQUNuQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDMUI7O0FDVEE7Ozs7OztTQU1nQixTQUFTLENBQUUsQ0FBZ0I7SUFDekMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1FBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUV4QyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQTtLQUFFO0lBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQTtJQUNaLEdBQUc7UUFDRCxJQUFJLEVBQUUsQ0FBQTtLQUNQLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQztJQUN6QixPQUFPLElBQUksQ0FBQTtBQUNiOztBQ1ZBOzs7Ozs7Ozs7U0FTZ0IsSUFBSSxDQUFFLENBQWdCLEVBQUUsQ0FBZ0I7SUFDdEQsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1FBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENB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
