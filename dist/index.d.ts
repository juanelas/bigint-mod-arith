declare function abs(a: number | bigint): number | bigint;

declare function bitLength(a: number | bigint): number;

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

declare function modInv(a: number | bigint, n: number | bigint): bigint;

declare function modPow(b: number | bigint, e: number | bigint, n: number | bigint): bigint;

declare function toZn(a: number | bigint, n: number | bigint): bigint;

export { Egcd, abs, bitLength, eGcd, gcd, lcm, max, min, modInv, modPow, toZn };
