bigint-mod-arith - v2.0.8

# bigint-mod-arith - v2.0.8

Some common functions for modular arithmetic using native JS implementation of BigInt

## Table of contents

### Interfaces

- [Egcd](interfaces/egcd.md)

### Functions

- [abs](API.md#abs)
- [bitLength](API.md#bitlength)
- [eGcd](API.md#egcd)
- [gcd](API.md#gcd)
- [lcm](API.md#lcm)
- [max](API.md#max)
- [min](API.md#min)
- [modInv](API.md#modinv)
- [modPow](API.md#modpow)
- [toZn](API.md#tozn)

## Functions

### abs

▸ **abs**(`a`: *number* \| *bigint*): *number* \| *bigint*

Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |

**Returns:** *number* \| *bigint*

The absolute value of a

Defined in: [ts/abs.ts:8](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/abs.ts#L8)

___

### bitLength

▸ **bitLength**(`a`: *number* \| *bigint*): *number*

Returns the bitlength of a number

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |

**Returns:** *number*

The bit length

Defined in: [ts/bitLength.ts:7](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/bitLength.ts#L7)

___

### eGcd

▸ **eGcd**(`a`: *number* \| *bigint*, `b`: *number* \| *bigint*): [*Egcd*](interfaces/egcd.md)

An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |
`b` | *number* \| *bigint* |

**Returns:** [*Egcd*](interfaces/egcd.md)

A triple (g, x, y), such that ax + by = g = gcd(a, b).

Defined in: [ts/egcd.ts:15](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/egcd.ts#L15)

___

### gcd

▸ **gcd**(`a`: *number* \| *bigint*, `b`: *number* \| *bigint*): *bigint*

Greatest-common divisor of two integers based on the iterative binary algorithm.

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |
`b` | *number* \| *bigint* |

**Returns:** *bigint*

The greatest common divisor of a and b

Defined in: [ts/gcd.ts:10](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/gcd.ts#L10)

___

### lcm

▸ **lcm**(`a`: *number* \| *bigint*, `b`: *number* \| *bigint*): *bigint*

The least common multiple computed as abs(a*b)/gcd(a,b)

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |
`b` | *number* \| *bigint* |

**Returns:** *bigint*

The least common multiple of a and b

Defined in: [ts/lcm.ts:10](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/lcm.ts#L10)

___

### max

▸ **max**(`a`: *number* \| *bigint*, `b`: *number* \| *bigint*): *number* \| *bigint*

Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<=b

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |
`b` | *number* \| *bigint* |

**Returns:** *number* \| *bigint*

Maximum of numbers a and b

Defined in: [ts/max.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/max.ts#L9)

___

### min

▸ **min**(`a`: *number* \| *bigint*, `b`: *number* \| *bigint*): *number* \| *bigint*

Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |
`b` | *number* \| *bigint* |

**Returns:** *number* \| *bigint*

Minimum of numbers a and b

Defined in: [ts/min.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/min.ts#L9)

___

### modInv

▸ **modInv**(`a`: *number* \| *bigint*, `n`: *number* \| *bigint*): *bigint* \| *number*

Modular inverse.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | *number* \| *bigint* | The number to find an inverse for   |
`n` | *number* \| *bigint* | The modulo    |

**Returns:** *bigint* \| *number*

The inverse modulo n or number NaN if it does not exist

Defined in: [ts/modInv.ts:11](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/modInv.ts#L11)

___

### modPow

▸ **modPow**(`b`: *number* \| *bigint*, `e`: *number* \| *bigint*, `n`: *number* \| *bigint*): *bigint* \| *number*

Modular exponentiation b**e mod n. Currently using the right-to-left binary method

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`b` | *number* \| *bigint* | base   |
`e` | *number* \| *bigint* | exponent   |
`n` | *number* \| *bigint* | modulo    |

**Returns:** *bigint* \| *number*

b**e mod n or number NaN if n <= 0

Defined in: [ts/modPow.ts:13](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/modPow.ts#L13)

___

### toZn

▸ **toZn**(`a`: *number* \| *bigint*, `n`: *number* \| *bigint*): *bigint* \| *number*

Finds the smallest positive element that is congruent to a in modulo n

**`remarks`** 
a and b must be the same type, either number or bigint

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | *number* \| *bigint* | An integer   |
`n` | *number* \| *bigint* | The modulo    |

**Returns:** *bigint* \| *number*

A bigint with the smallest positive representation of a modulo n or number NaN if n < 0

Defined in: [ts/toZn.ts:12](https://github.com/juanelas/bigint-mod-arith/blob/fd780cb/src/ts/toZn.ts#L12)
