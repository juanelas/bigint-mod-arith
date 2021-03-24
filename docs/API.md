bigint-mod-arith - v3.0.0

# bigint-mod-arith - v3.0.0

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

Defined in: [ts/abs.ts:8](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/abs.ts#L8)

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

Defined in: [ts/bitLength.ts:7](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/bitLength.ts#L7)

___

### eGcd

▸ **eGcd**(`a`: *number* \| *bigint*, `b`: *number* \| *bigint*): [*Egcd*](interfaces/egcd.md)

An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).

**`throws`** {RangeError}
This excepction is thrown if a or b are less than 0

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* \| *bigint* |
`b` | *number* \| *bigint* |

**Returns:** [*Egcd*](interfaces/egcd.md)

A triple (g, x, y), such that ax + by = g = gcd(a, b).

Defined in: [ts/egcd.ts:18](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/egcd.ts#L18)

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

Defined in: [ts/gcd.ts:10](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/gcd.ts#L10)

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

Defined in: [ts/lcm.ts:10](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/lcm.ts#L10)

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

Defined in: [ts/max.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/max.ts#L9)

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

Defined in: [ts/min.ts:9](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/min.ts#L9)

___

### modInv

▸ **modInv**(`a`: *number* \| *bigint*, `n`: *number* \| *bigint*): *bigint*

Modular inverse.

**`throws`** {RangeError}
Excpeption thorwn when a does not have inverse modulo n

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | *number* \| *bigint* | The number to find an inverse for   |
`n` | *number* \| *bigint* | The modulo    |

**Returns:** *bigint*

The inverse modulo n

Defined in: [ts/modInv.ts:14](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/modInv.ts#L14)

___

### modPow

▸ **modPow**(`b`: *number* \| *bigint*, `e`: *number* \| *bigint*, `n`: *number* \| *bigint*): *bigint*

Modular exponentiation b**e mod n. Currently using the right-to-left binary method

**`throws`** {RangeError}
Excpeption thrown when n is not > 0

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`b` | *number* \| *bigint* | base   |
`e` | *number* \| *bigint* | exponent   |
`n` | *number* \| *bigint* | modulo    |

**Returns:** *bigint*

b**e mod n

Defined in: [ts/modPow.ts:16](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/modPow.ts#L16)

___

### toZn

▸ **toZn**(`a`: *number* \| *bigint*, `n`: *number* \| *bigint*): *bigint*

Finds the smallest positive element that is congruent to a in modulo n

**`remarks`** 
a and b must be the same type, either number or bigint

**`throws`** {RangeError}
Excpeption thrown when n is not > 0

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | *number* \| *bigint* | An integer   |
`n` | *number* \| *bigint* | The modulo    |

**Returns:** *bigint*

A bigint with the smallest positive representation of a modulo n

Defined in: [ts/toZn.ts:15](https://github.com/juanelas/bigint-mod-arith/blob/d947979/src/ts/toZn.ts#L15)
