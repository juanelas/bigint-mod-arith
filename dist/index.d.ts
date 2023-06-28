declare function abs(a: number | bigint): number | bigint;

declare function bitLength(a: number | bigint): number;

declare function crt(remainders: bigint[], modulos: bigint[], modulo?: bigint): bigint;

interface Egcd {
    g: bigint;
    x: bigint;
    y: bigint;
}
declare function eGcd(a: number | bigint, b: number | bigint): Egcd;

declare function gcd(a: number | bigint, b: number | bigint): bigint;

declare function lcm(a: number | bigint, b: number | bigint): bigint;

declare function max(a: number | bigint, b: number | bigint): number | bigint;

declare function min(a: number | bigint, b: number | bigint): number | bigint;

declare function modAdd(addends: Array<number | bigint>, n: number | bigint): bigint;

declare function modInv(a: number | bigint, n: number | bigint): bigint;

declare function modMultiply(factors: Array<number | bigint>, n: number | bigint): bigint;

type PrimePower = [number | bigint, number | bigint];
type PrimeFactor = number | bigint | PrimePower;
declare function modPow(b: number | bigint, e: number | bigint, n: number | bigint, primeFactorization?: PrimeFactor[]): bigint;

type PrimeFactorization = Array<[bigint, bigint]>;
declare function phi(primeFactorization: PrimeFactorization): bigint;

declare function toZn(a: number | bigint, n: number | bigint): bigint;

export { Egcd, PrimeFactor, PrimeFactorization, PrimePower, abs, bitLength, crt, eGcd, gcd, lcm, max, min, modAdd, modInv, modMultiply, modPow, phi, toZn };
