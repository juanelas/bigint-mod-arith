[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Node CI](https://github.com/juanelas/bigint-mod-arith/workflows/Node%20CI/badge.svg)](https://github.com/juanelas/bigint-mod-arith/actions?query=workflow%3A%22Node+CI%22)
[![Coverage Status](https://coveralls.io/repos/github/juanelas/bigint-mod-arith/badge.svg?branch=master)](https://coveralls.io/github/juanelas/bigint-mod-arith?branch=master)

# bigint-mod-arith

Some extra functions to work with modular arithmetic using native JS ([ES-2020](https://tc39.es/ecma262/#sec-bigint-objects)) implementation of BigInt. It can be used by any [Web Browser or webview supporting BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility) and with Node.js (>=10.4.0).

> The operations supported on BigInts are not constant time. BigInt can be therefore **[unsuitable for use in cryptography](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).** Many platforms provide native support for cryptography, such as [Web Cryptography API](https://w3c.github.io/webcrypto/) or [Node.js Crypto](https://nodejs.org/dist/latest/docs/api/crypto.html).

## Usage

`bigint-mod-arith` can be imported to your project with `npm`:

```console
npm install bigint-mod-arith
```

Then either require (Node.js CJS):

```javascript
const bigintModArith = require('bigint-mod-arith')
```

or import (JavaScript ES module):

```javascript
import * as bigintModArith from 'bigint-mod-arith'
```

The appropriate version for browser or node is automatically exported.

You can also download the [IIFE bundle](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/dist/bundles/bigint-mod-arith.iife.js), the [ESM bundle](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/dist/bundles/bigint-mod-arith.esm.js) or the [UMD bundle](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/dist/bundles/bigint-mod-arith.umd.js) and manually add it to your project, or, if you have already imported `bigint-mod-arith` to your project, just get the bundles from `node_modules/bigint-mod-arith/dist/bundles/`.

An example of usage could be:

```typescript
/* Stage 3 BigInts with value 666 can be declared as BigInt('666')
or the shorter syntax 666n.
Notice that you can also pass a number, e.g. BigInt(666), but it is not
recommended since values over 2**53 - 1 won't be safe but no warning will
be raised.
*/
const a = BigInt('5')
const b = BigInt('2')
const n = 19n

console.log(bigintModArith.modPow(a, b, n)) // prints 6

console.log(bigintModArith.modInv(2n, 5n)) // prints 3

console.log(bigintModArith.modInv(BigInt('3'), BigInt('5'))) // prints 2
```

## API reference documentation

[Check the API](./docs/API.md)
