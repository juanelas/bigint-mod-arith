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

export { abs, bitLength, eGcd, gcd, lcm, max, min, modInv, modPow, toZn };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnJvd3Nlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2Ficy50cyIsIi4uLy4uL3NyYy90cy9iaXRMZW5ndGgudHMiLCIuLi8uLi9zcmMvdHMvZWdjZC50cyIsIi4uLy4uL3NyYy90cy9nY2QudHMiLCIuLi8uLi9zcmMvdHMvbGNtLnRzIiwiLi4vLi4vc3JjL3RzL21heC50cyIsIi4uLy4uL3NyYy90cy9taW4udHMiLCIuLi8uLi9zcmMvdHMvdG9abi50cyIsIi4uLy4uL3NyYy90cy9tb2RJbnYudHMiLCIuLi8uLi9zcmMvdHMvbW9kUG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztTQU9nQixHQUFHLENBQUUsQ0FBZ0I7SUFDbkMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzFCOztBQ1RBOzs7Ozs7U0FNZ0IsU0FBUyxDQUFFLENBQWdCO0lBQ3pDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQTtLQUFFO0lBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQTtJQUNaLEdBQUc7UUFDRCxJQUFJLEVBQUUsQ0FBQTtLQUNQLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQztJQUN6QixPQUFPLElBQUksQ0FBQTtBQUNiOztBQ1RBOzs7Ozs7Ozs7U0FTZ0IsSUFBSSxDQUFFLENBQWdCLEVBQUUsQ0FBZ0I7SUFDdEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2QixJQUFJLE9BQU8sSUFBSSxFQUFFLElBQUksT0FBTyxJQUFJLEVBQUU7UUFBRSxNQUFNLElBQUksVUFBVSxDQUFD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
