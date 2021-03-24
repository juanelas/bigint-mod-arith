import { abs } from './abs'
import { gcd } from './gcd'
/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param a
 * @param b
 *
 * @returns The least common multiple of a and b
 */
export function lcm (a: number|bigint, b: number|bigint): bigint {
  const aBigInt = BigInt(a)
  const bBigInt = BigInt(b)
  if (aBigInt === 0n && bBigInt === 0n) return BigInt(0)
  return abs(aBigInt * bBigInt) as bigint / gcd(aBigInt, bBigInt)
}
