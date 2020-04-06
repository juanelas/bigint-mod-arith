[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# bigint-mod-arith

Some extra functions to work with modular arithmetic using native JS ([ES-2020](https://tc39.es/ecma262/#sec-bigint-objects)) implementation of BigInt. It can be used by any [Web Browser or webview supporting BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility) and with Node.js (>=10.4.0).

> The operations supported on BigInts are not constant time. BigInt can be therefore **[unsuitable for use in cryptography](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).** Many platforms provide native support for cryptography, such as [Web Cryptography API](https://w3c.github.io/webcrypto/) or [Node.js Crypto](https://nodejs.org/dist/latest/docs/api/crypto.html).

## Installation

bigint-mod-arith is distributed for [web browsers and/or webviews supporting BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility) as an ES6 module or an IIFE file; and for Node.js (>=10.4.0), as a CJS module.

bigint-mod-arith can be imported to your project with `npm`:

```bash
npm install bigint-mod-arith
```
NPM installation defaults to the ES6 module for browsers and the CJS one for Node.js.

For web browsers, you can also directly download the [IIFE bundle](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/lib/index.browser.bundle.js) or the [ES6 bundle module](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/lib/index.browser.bundle.mod.js) from GitHub.

## Usage example

Import your module as :

 - Node.js
   ```javascript
   const bigintModArith = require('bigint-mod-arith')
   ... // your code here
   ```
 - JavaScript native project
   ```javascript
   import * as bigintModArith from 'bigint-mod-arith'
   ... // your code here
   ```
 - JavaScript native browser ES6 mod
   ```html
   <script type="module">
      import * as bigintModArith from 'lib/index.browser.bundle.mod.js'  // Use you actual path to the broser mod bundle
      ... // your code here
    </script>
   import as bcu from 'bigint-mod-arith'
   ... // your code here
   ```
 - JavaScript native browser IIFE
   ```html
   <script src="../../lib/index.browser.bundle.js"></script>
   <script>
     ... // your code here
   </script>
 - TypeScript
   ```typescript
   import * as bigintModArith from 'bigint-mod-arith'
   ... // your code here
   ```
   > BigInt is [ES-2020](https://tc39.es/ecma262/#sec-bigint-objects). In order to use it with TypeScript you should set `lib` (and probably also `target` and `module`) to `esnext` in `tsconfig.json`.

```javascript
/* Stage 3 BigInts with value 666 can be declared as BigInt('666')
or the shorter new no-so-linter-friendly syntax 666n.
Notice that you can also pass a number, e.g. BigInt(666), but it is not
recommended since values over 2**53 - 1 won't be safe but no warning will
be raised.
*/
const a = BigInt('5')
const b = BigInt('2')
const n = BigInt('19')

console.log(bigintModArith.modPow(a, b, n)) // prints 6

console.log(bigintModArith.modInv(BigInt('2'), BigInt('5'))) // prints 3

console.log(bigintModArith.modInv(BigInt('3'), BigInt('5'))) // prints 2

```

## JS Doc

{{>main}}
