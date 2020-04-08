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

For web browsers, you can also directly download the [IIFE bundle](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/lib/index.browser.bundle.iife.js) or the [ES6 bundle module](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/lib/index.browser.bundle.mod.js) from GitHub.

## Usage example

Import your module as :

 - Node.js
   ```javascript
   const bigintModArith = require('bigint-mod-arith')
   ... // your code here
   ```
 - JavaScript native or TypeScript project
   ```javascript
   import * as bigintModArith from 'bigint-mod-arith'
   ... // your code here
   ```
   > BigInt is [ES-2020](https://tc39.es/ecma262/#sec-bigint-objects). In order to use it with TypeScript you should set `lib` (and probably also `target` and `module`) to `esnext` in `tsconfig.json`.
 - JavaScript native browser ES6 mod
   ```html
   <script type="module">
      import * as bigintModArith from 'lib/index.browser.bundle.mod.js'  // Use you actual path to the broser mod bundle
      ... // your code here
    </script>
   ```
 - JavaScript native browser IIFE
   ```html
   <script src="../../lib/index.browser.bundle.js"></script> <!-- Use you actual path to the browser bundle -->
   <script>
     ... // your code here
   </script>
   ```

And you could use it like in the following:

```javascript
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

<a name="module_bigint-mod-arith"></a>

### bigint-mod-arith
Some common functions for modular arithmetic using native JS implementation of BigInt


* [bigint-mod-arith](#module_bigint-mod-arith)
    * [~abs(a)](#module_bigint-mod-arith..abs) ⇒ <code>bigint</code>
    * [~bitLength(a)](#module_bigint-mod-arith..bitLength) ⇒ <code>number</code>
    * [~eGcd(a, b)](#module_bigint-mod-arith..eGcd) ⇒ <code>egcdReturn</code>
    * [~gcd(a, b)](#module_bigint-mod-arith..gcd) ⇒ <code>bigint</code>
    * [~lcm(a, b)](#module_bigint-mod-arith..lcm) ⇒ <code>bigint</code>
    * [~max(a, b)](#module_bigint-mod-arith..max) ⇒ <code>bigint</code>
    * [~min(a, b)](#module_bigint-mod-arith..min) ⇒ <code>bigint</code>
    * [~modInv(a, n)](#module_bigint-mod-arith..modInv) ⇒ <code>bigint</code>
    * [~modPow(b, e, n)](#module_bigint-mod-arith..modPow) ⇒ <code>bigint</code>
    * [~toZn(a, n)](#module_bigint-mod-arith..toZn) ⇒ <code>bigint</code>
    * [~egcdReturn](#module_bigint-mod-arith..egcdReturn) : <code>Object</code>

<a name="module_bigint-mod-arith..abs"></a>

#### bigint-mod-arith~abs(a) ⇒ <code>bigint</code>
Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - the absolute value of a  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..bitLength"></a>

#### bigint-mod-arith~bitLength(a) ⇒ <code>number</code>
Returns the bitlength of a number

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>number</code> - - the bit length  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..eGcd"></a>

#### bigint-mod-arith~eGcd(a, b) ⇒ <code>egcdReturn</code>
An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>egcdReturn</code> - A triple (g, x, y), such that ax + by = g = gcd(a, b).  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..gcd"></a>

#### bigint-mod-arith~gcd(a, b) ⇒ <code>bigint</code>
Greatest-common divisor of two integers based on the iterative binary algorithm.

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - The greatest common divisor of a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..lcm"></a>

#### bigint-mod-arith~lcm(a, b) ⇒ <code>bigint</code>
The least common multiple computed as abs(a*b)/gcd(a,b)

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - The least common multiple of a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..max"></a>

#### bigint-mod-arith~max(a, b) ⇒ <code>bigint</code>
Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<=b

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - maximum of numbers a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..min"></a>

#### bigint-mod-arith~min(a, b) ⇒ <code>bigint</code>
Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - minimum of numbers a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="module_bigint-mod-arith..modInv"></a>

#### bigint-mod-arith~modInv(a, n) ⇒ <code>bigint</code>
Modular inverse.

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - the inverse modulo n or NaN if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>bigint</code> | The number to find an inverse for |
| n | <code>number</code> \| <code>bigint</code> | The modulo |

<a name="module_bigint-mod-arith..modPow"></a>

#### bigint-mod-arith~modPow(b, e, n) ⇒ <code>bigint</code>
Modular exponentiation b**e mod n. Currently using the right-to-left binary method

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - b**e mod n  

| Param | Type | Description |
| --- | --- | --- |
| b | <code>number</code> \| <code>bigint</code> | base |
| e | <code>number</code> \| <code>bigint</code> | exponent |
| n | <code>number</code> \| <code>bigint</code> | modulo |

<a name="module_bigint-mod-arith..toZn"></a>

#### bigint-mod-arith~toZn(a, n) ⇒ <code>bigint</code>
Finds the smallest positive element that is congruent to a in modulo n

**Kind**: inner method of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Returns**: <code>bigint</code> - The smallest positive representation of a in modulo n  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>bigint</code> | An integer |
| n | <code>number</code> \| <code>bigint</code> | The modulo |

<a name="module_bigint-mod-arith..egcdReturn"></a>

#### bigint-mod-arith~egcdReturn : <code>Object</code>
A triple (g, x, y), such that ax + by = g = gcd(a, b).

**Kind**: inner typedef of [<code>bigint-mod-arith</code>](#module_bigint-mod-arith)  
**Properties**

| Name | Type |
| --- | --- |
| g | <code>bigint</code> | 
| x | <code>bigint</code> | 
| y | <code>bigint</code> | 

