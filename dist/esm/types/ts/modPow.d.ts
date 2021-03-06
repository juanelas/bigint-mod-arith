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
export declare function modPow(b: number | bigint, e: number | bigint, n: number | bigint): bigint;
//# sourceMappingURL=modPow.d.ts.map