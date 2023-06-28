# bigint-mod-arith - v3.3.1

Some common functions for modular arithmetic using native JS implementation of BigInt

## Table of contents

### Interfaces

- [Egcd](interfaces/Egcd.md)

### Type Aliases

- [PrimeFactor](API.md#primefactor)
- [PrimeFactorization](API.md#primefactorization)
- [PrimePower](API.md#primepower)

### Functions

- [abs](API.md#abs)
- [bitLength](API.md#bitlength)
- [crt](API.md#crt)
- [eGcd](API.md#egcd)
- [gcd](API.md#gcd)
- [lcm](API.md#lcm)
- [max](API.md#max)
- [min](API.md#min)
- [modAdd](API.md#modadd)
- [modInv](API.md#modinv)
- [modMultiply](API.md#modmultiply)
- [modPow](API.md#modpow)
- [phi](API.md#phi)
- [toZn](API.md#tozn)

## Type Aliases

### PrimeFactor

Ƭ **PrimeFactor**: `number` \| `bigint` \| [`PrimePower`](API.md#primepower)

#### Defined in

[modPow.ts:8](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/modPow.ts#L8)

___

### PrimeFactorization

Ƭ **PrimeFactorization**: [`bigint`, `bigint`][]

#### Defined in

[phi.ts:1](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/phi.ts#L1)

___

### PrimePower

Ƭ **PrimePower**: [`number` \| `bigint`, `number` \| `bigint`]

#### Defined in

[modPow.ts:7](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/modPow.ts#L7)

## Functions

### abs

▸ **abs**(`a`): `number` \| `bigint`

Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |

#### Returns

`number` \| `bigint`

The absolute value of a

#### Defined in

[abs.ts:8](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/abs.ts#L8)

___

### bitLength

▸ **bitLength**(`a`): `number`

Returns the (minimum) length of a number expressed in bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |

#### Returns

`number`

The bit length

#### Defined in

[bitLength.ts:7](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/bitLength.ts#L7)

___

### crt

▸ **crt**(`remainders`, `modulos`, `modulo?`): `bigint`

Chinese remainder theorem states that if one knows the remainders of the Euclidean division of an integer n by several integers, then one can determine uniquely the remainder of the division of n by the product of these integers, under the condition that the divisors are pairwise coprime (no two divisors share a common factor other than 1). Provided that n_i are pairwise coprime, and a_i any integers, this function returns a solution for the following system of equations:
   x ≡ a_1 mod n_1
   x ≡ a_2 mod n_2
   ⋮
   x ≡ a_k mod n_k

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `remainders` | `bigint`[] | the array of remainders a_i. For example [17n, 243n, 344n] |
| `modulos` | `bigint`[] | the array of modulos n_i. For example [769n, 2017n, 47701n] |
| `modulo?` | `bigint` | the product of all modulos. Provided here just to save some operations if it is already known |

#### Returns

`bigint`

x

#### Defined in

[crt.ts:16](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/crt.ts#L16)

___

### eGcd

▸ **eGcd**(`a`, `b`): [`Egcd`](interfaces/Egcd.md)

An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).

**`Throws`**

RangeError if a or b are <= 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |
| `b` | `number` \| `bigint` |

#### Returns

[`Egcd`](interfaces/Egcd.md)

A triple (g, x, y), such that ax + by = g = gcd(a, b).

#### Defined in

[egcd.ts:17](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/egcd.ts#L17)

___

### gcd

▸ **gcd**(`a`, `b`): `bigint`

Greatest common divisor of two integers based on the iterative binary algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |
| `b` | `number` \| `bigint` |

#### Returns

`bigint`

The greatest common divisor of a and b

#### Defined in

[gcd.ts:11](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/gcd.ts#L11)

___

### lcm

▸ **lcm**(`a`, `b`): `bigint`

The least common multiple computed as abs(a*b)/gcd(a,b)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |
| `b` | `number` \| `bigint` |

#### Returns

`bigint`

The least common multiple of a and b

#### Defined in

[lcm.ts:11](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/lcm.ts#L11)

___

### max

▸ **max**(`a`, `b`): `number` \| `bigint`

Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<b

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |
| `b` | `number` \| `bigint` |

#### Returns

`number` \| `bigint`

Maximum of numbers a and b

#### Defined in

[max.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/max.ts#L9)

___

### min

▸ **min**(`a`, `b`): `number` \| `bigint`

Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<b

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| `bigint` |
| `b` | `number` \| `bigint` |

#### Returns

`number` \| `bigint`

Minimum of numbers a and b

#### Defined in

[min.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/min.ts#L9)

___

### modAdd

▸ **modAdd**(`addends`, `n`): `bigint`

Modular addition of (a_1 + ... + a_r) mod n

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addends` | (`number` \| `bigint`)[] | an array of the numbers a_i to add. For example [3, 12353251235n, 1243, -12341232545990n] |
| `n` | `number` \| `bigint` | the modulo |

#### Returns

`bigint`

The smallest positive integer that is congruent with (a_1 + ... + a_r) mod n

#### Defined in

[modAdd.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/modAdd.ts#L9)

___

### modInv

▸ **modInv**(`a`, `n`): `bigint`

Modular inverse.

**`Throws`**

RangeError if a does not have inverse modulo n

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` \| `bigint` | The number to find an inverse for |
| `n` | `number` \| `bigint` | The modulo |

#### Returns

`bigint`

The inverse modulo n

#### Defined in

[modInv.ts:14](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/modInv.ts#L14)

___

### modMultiply

▸ **modMultiply**(`factors`, `n`): `bigint`

Modular addition of (a_1 * ... * a_r) mod n
 *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factors` | (`number` \| `bigint`)[] | an array of the numbers a_i to multiply. For example [3, 12353251235n, 1243, -12341232545990n] * |
| `n` | `number` \| `bigint` | the modulo * |

#### Returns

`bigint`

The smallest positive integer that is congruent with (a_1 * ... * a_r) mod n

#### Defined in

[modMultiply.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/modMultiply.ts#L9)

___

### modPow

▸ **modPow**(`b`, `e`, `n`, `primeFactorization?`): `bigint`

Modular exponentiation b**e mod n. Currently using the right-to-left binary method if the prime factorization is not provided, or the chinese remainder theorem otherwise.

**`Throws`**

RangeError if n <= 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `number` \| `bigint` | base |
| `e` | `number` \| `bigint` | exponent |
| `n` | `number` \| `bigint` | modulo |
| `primeFactorization?` | [`PrimeFactor`](API.md#primefactor)[] | an array of the prime factors, for example [5n, 5n, 13n, 27n], or prime powers as [p, k], for instance [[5, 2], [13, 1], [27, 1]]. If the prime factorization is provided the chinese remainder theorem is used to greatly speed up the exponentiation. |

#### Returns

`bigint`

b**e mod n

#### Defined in

[modPow.ts:22](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/modPow.ts#L22)

___

### phi

▸ **phi**(`primeFactorization`): `bigint`

A function that computes the Euler's totien function of a number n, whose prime power factorization is known

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `primeFactorization` | [`PrimeFactorization`](API.md#primefactorization) | an array of arrays containing the prime power factorization of a number n. For example, for n = (p1**k1)*(p2**k2)*...*(pr**kr), one should provide [[p1, k1], [p2, k2], ... , [pr, kr]] |

#### Returns

`bigint`

phi((p1**k1)*(p2**k2)*...*(pr**kr))

#### Defined in

[phi.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/phi.ts#L9)

___

### toZn

▸ **toZn**(`a`, `n`): `bigint`

Finds the smallest positive element that is congruent to a in modulo n

**`Remarks`**

a and b must be the same type, either number or bigint

**`Throws`**

RangeError if n <= 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` \| `bigint` | An integer |
| `n` | `number` \| `bigint` | The modulo |

#### Returns

`bigint`

A bigint with the smallest positive representation of a modulo n

#### Defined in

[toZn.ts:14](https://github.com/juanelas/bigint-mod-arith/blob/b365f49/src/ts/toZn.ts#L14)
