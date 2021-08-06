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
 * @throws {RangeError}
 * This excepction is thrown if a or b are less than 0
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
 * @param a - An integer
 * @param n - The modulo
 *
 * @throws {RangeError}
 * Excpeption thrown when n is not > 0
 *
 * @returns A bigint with the smallest positive representation of a modulo n
 */
function toZn(a, n) {
    if (typeof a === 'number')
        a = BigInt(a);
    if (typeof n === 'number')
        n = BigInt(n);
    if (n <= 0n) {
        throw new RangeError('n must be > 0');
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
 * @throws {RangeError}
 * Excpeption thorwn when a does not have inverse modulo n
 *
 * @returns The inverse modulo n
 */
function modInv(a, n) {
    const egcd = eGcd(toZn(a, n), n);
    if (egcd.g !== 1n) {
        throw new RangeError(`${a.toString()} does not have inverse modulo ${n.toString()}`); // modular inverse does not exist
    }
    else {
        return toZn(egcd.x, n);
    }
}

/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method
 *
 * @param b base
 * @param e exponent
 * @param n modulo
 *
 * @throws {RangeError}
 * Excpeption thrown when n is not > 0
 *
 * @returns b**e mod n
 */
function modPow(b, e, n) {
    if (typeof b === 'number')
        b = BigInt(b);
    if (typeof e === 'number')
        e = BigInt(e);
    if (typeof n === 'number')
        n = BigInt(n);
    if (n <= 0n) {
        throw new RangeError('n must be > 0');
    }
    else if (n === 1n) {
        return 0n;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2Ficy50cyIsIi4uLy4uL3NyYy90cy9iaXRMZW5ndGgudHMiLCIuLi8uLi9zcmMvdHMvZWdjZC50cyIsIi4uLy4uL3NyYy90cy9nY2QudHMiLCIuLi8uLi9zcmMvdHMvbGNtLnRzIiwiLi4vLi4vc3JjL3RzL21heC50cyIsIi4uLy4uL3NyYy90cy9taW4udHMiLCIuLi8uLi9zcmMvdHMvdG9abi50cyIsIi4uLy4uL3NyYy90cy9tb2RJbnYudHMiLCIuLi8uLi9zcmMvdHMvbW9kUG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7U0FPZ0IsR0FBRyxDQUFFLENBQWdCO0lBQ25DLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUMxQjs7QUNUQTs7Ozs7O1NBTWdCLFNBQVMsQ0FBRSxDQUFnQjtJQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXhDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFBO0tBQUU7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO0lBQ1osR0FBRztRQUNELElBQUksRUFBRSxDQUFBO0tBQ1AsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDO0lBQ3pCLE9BQU8sSUFBSSxDQUFBO0FBQ2I7O0FDVkE7Ozs7Ozs7Ozs7OztTQVlnQixJQUFJLENBQUUsQ0FBZ0IsRUFBRSxDQUFnQjtJQUN0RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFFLENBQUMsR0FBRyxNQUFNLENBQUMs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
