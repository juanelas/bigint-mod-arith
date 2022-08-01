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
    // return abs(a * b) as bigint / gcd(a, b)
    return abs((a / gcd(a, b)) * b);
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

export { abs, bitLength, eGcd, gcd, lcm, max, min, modInv, modPow, toZn };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnJvd3Nlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2Ficy50cyIsIi4uLy4uL3NyYy90cy9iaXRMZW5ndGgudHMiLCIuLi8uLi9zcmMvdHMvZWdjZC50cyIsIi4uLy4uL3NyYy90cy9nY2QudHMiLCIuLi8uLi9zcmMvdHMvbGNtLnRzIiwiLi4vLi4vc3JjL3RzL21heC50cyIsIi4uLy4uL3NyYy90cy9taW4udHMiLCIuLi8uLi9zcmMvdHMvdG9abi50cyIsIi4uLy4uL3NyYy90cy9tb2RJbnYudHMiLCIuLi8uLi9zcmMvdHMvbW9kUG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBTUc7QUFDRyxTQUFVLEdBQUcsQ0FBRSxDQUFnQixFQUFBO0FBQ25DLElBQUEsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzFCOztBQ1RBOzs7OztBQUtHO0FBQ0csU0FBVSxTQUFTLENBQUUsQ0FBZ0IsRUFBQTtJQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7QUFBRSxRQUFBLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFeEMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQUUsUUFBQSxPQUFPLENBQUMsQ0FBQTtBQUFFLEtBQUE7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO0lBQ1osR0FBRztBQUNELFFBQUEsSUFBSSxFQUFFLENBQUE7QUFDUCxLQUFBLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQztBQUN6QixJQUFBLE9BQU8sSUFBSSxDQUFBO0FBQ2I7O0FDVkE7Ozs7Ozs7Ozs7O0FBV0c7QUFDYSxTQUFBLElBQUksQ0FBRSxDQUFnQixFQUFFLENBQWdCLEVBQUE7SUFDdEQsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO0FBQUUsUUFBQSxDQUFDLEdBQUcsTUFB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
