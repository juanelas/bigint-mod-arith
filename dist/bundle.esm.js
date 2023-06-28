function abs(a) {
    return (a >= 0) ? a : -a;
}

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

function eGcd(a, b) {
    if (typeof a === 'number')
        a = BigInt(a);
    if (typeof b === 'number')
        b = BigInt(b);
    if (a <= 0n || b <= 0n)
        throw new RangeError('a and b MUST be > 0');
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
        x,
        y
    };
}

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

function modInv(a, n) {
    const egcd = eGcd(toZn(a, n), n);
    if (egcd.g !== 1n) {
        throw new RangeError(`${a.toString()} does not have inverse modulo ${n.toString()}`);
    }
    else {
        return toZn(egcd.x, n);
    }
}

function crt(remainders, modulos, modulo) {
    if (remainders.length !== modulos.length) {
        throw new RangeError('The remainders and modulos arrays should have the same length');
    }
    const product = modulo ?? modulos.reduce((acc, val) => acc * val, 1n);
    return modulos.reduce((sum, mod, index) => {
        const partialProduct = product / mod;
        const inverse = modInv(partialProduct, mod);
        const toAdd = ((partialProduct * inverse) % product * remainders[index]) % product;
        return toZn(sum + toAdd, product);
    }, 0n);
}

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
    return aAbs << shift;
}

function lcm(a, b) {
    if (typeof a === 'number')
        a = BigInt(a);
    if (typeof b === 'number')
        b = BigInt(b);
    if (a === 0n && b === 0n)
        return BigInt(0);
    return abs((a / gcd(a, b)) * b);
}

function max(a, b) {
    return (a >= b) ? a : b;
}

function min(a, b) {
    return (a >= b) ? b : a;
}

function modAdd(addends, n) {
    const mod = BigInt(n);
    const as = addends.map(a => BigInt(a) % mod);
    return toZn(as.reduce((sum, a) => sum + a % mod, 0n), mod);
}

function modMultiply(factors, n) {
    const mod = BigInt(n);
    const as = factors.map(a => BigInt(a) % mod);
    return toZn(as.reduce((prod, a) => prod * a % mod, 1n), mod);
}

function phi(primeFactorization) {
    return primeFactorization.map(v => (v[0] ** (v[1] - 1n)) * (v[0] - 1n)).reduce((prev, curr) => {
        return curr * prev;
    }, 1n);
}

function modPow(b, e, n, primeFactorization) {
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
        return modInv(modPow(b, abs(e), n, primeFactorization), n);
    }
    if (primeFactorization !== undefined) {
        return modPowWithFactorization(b, e, n, primePowerArguments(primeFactorization));
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
function primePowerArguments(primeFactors) {
    const primePowers = {};
    primeFactors.forEach((primeFactor) => {
        if (typeof primeFactor === 'bigint' || typeof primeFactor === 'number') {
            const key = String(primeFactor);
            if (primePowers[key] === undefined) {
                primePowers[key] = { p: BigInt(primeFactor), k: 1n };
            }
            else {
                primePowers[key].k += 1n;
            }
        }
        else {
            const key = String(primeFactor[0]);
            if (primePowers[key] === undefined) {
                primePowers[key] = { p: BigInt(primeFactor[0]), k: BigInt(primeFactor[1]) };
            }
            else {
                primePowers[key].k += BigInt(primeFactor[1]);
            }
        }
    });
    return Object.values(primePowers).map(val => [val.p, val.k]);
}
function modPowWithFactorization(b, e, n, primeFactorization) {
    const mods = primeFactorization.map(v => v[0] ** v[1]);
    const phis = primeFactorization.map(v => phi([v]));
    const remainders = phis.map((phi, i) => modPow(b, e % phi, mods[i]));
    return crt(remainders, mods, n);
}

export { abs, bitLength, crt, eGcd, gcd, lcm, max, min, modAdd, modInv, modMultiply, modPow, phi, toZn };
