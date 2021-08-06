[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
{{GITHUB_ACTIONS_BADGES}}

# {{PKG_NAME}}

Some extra functions to work with modular arithmetic using native JS ([ES-2020](https://tc39.es/ecma262/#sec-bigint-objects)) implementation of BigInt. It can be used by any [Web Browser or webview supporting BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility) and with Node.js (>=10.4.0).

> The operations supported on BigInts are not constant time. BigInt can be therefore **[unsuitable for use in cryptography](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).** Many platforms provide native support for cryptography, such as [Web Cryptography API](https://w3c.github.io/webcrypto/) or [Node.js Crypto](https://nodejs.org/dist/latest/docs/api/crypto.html).

## Usage

`{{PKG_NAME}}` can be imported to your project with `npm`:

```console
npm install {{PKG_NAME}}
```

Then either require (Node.js CJS):

```javascript
const {{PKG_CAMELCASE}} = require('{{PKG_NAME}}')
```

> **Node >=10.4 <11**. `{{PKG_NAME}}` uses workers to speed up some operations. Workers are enabled by default with Node.js from version 11. In order to use them with Node >=10.4 and <11, you need to execute node with the flag `--experimental-worker`, and require the .js file manually (otherwise .cjs is required by default and would not be supported by the workers)
>
> ```javascript
> const bigintCryptoUtils = require('bigint-crypto-utils/dist/cjs/index.node')  // ONLY FOR node >=10.4 <11 !
> ```

or import (JavaScript ES module):

```javascript
import * as {{PKG_CAMELCASE}} from '{{PKG_NAME}}'
```

The appropriate version for browser or node is automatically exported.

You can also download the {{IIFE_BUNDLE}}, the {{ESM_BUNDLE}} or the {{UMD_BUNDLE}} and manually add it to your project, or, if you have already imported `{{PKG_NAME}}` to your project, just get the bundles from `node_modules/{{PKG_NAME}}/dist/bundles/`.

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
