# bigint-mod-arith

Some extra functions to work with modular arithmetics using native JS (stage 3) implementation of BigInt. It can be used by any [Web Browser or webview supporting BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility) and with Node.js (>=10.4.0).

If you are looking for a cryptographically-secure random generator and for strong probable primes (generation and testing), you
may be interested in [bigint-secrets](https://github.com/juanelas/bigint-secrets)

_The operations supported on BigInts are not constant time. BigInt can be therefore **[unsuitable for use in cryptography](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).** Many platforms provide native support for cryptography, such as [Web Cryptography API](https://w3c.github.io/webcrypto/) or [Node.js Crypto](https://nodejs.org/dist/latest/docs/api/crypto.html)._

## Installation
bigint-mod-arith is distributed for [web browsers and/or webviews supporting
BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility)
as an ES6 module or an IIFE file; and for Node.js (>=10.4.0), as a CJS module.

bigint-mod-arith can be imported to your project with `npm`:
```bash
npm install bigint-mod-arith
```
NPM installation defaults to the ES6 module for browsers and the CJS one for Node.js.

For web browsers, you can also directly download the minimised version of the [IIFE file](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/dist/bigint-mod-arith-latest.browser.min.js) or the [ES6 module](https://raw.githubusercontent.com/juanelas/bigint-mod-arith/master/dist/bigint-mod-arith-latest.browser.mod.min.js) from GitHub.

## Usage example

With node js:
```javascript
const bigintModArith = require('bigint-mod-arith');

/* Stage 3 BigInts with value 666 can be declared as BigInt('666')
or the shorter new no-so-linter-friendly syntax 666n.
Notice that you can also pass a number, e.g. BigInt(666), but it is not
recommended since values over 2**53 - 1 won't be safe but no warning will
be raised.
*/
let a = BigInt('5');
let b = BigInt('2');
let n = BigInt('19');

console.log(bigintCryptoUtils.modPow(a, b, n)); // prints 6

console.log(bigintCryptoUtils.modInv(BigInt('2'), BigInt('5'))); // prints 3

console.log(bigintCryptoUtils.modInv(BigInt('3'), BigInt('5'))); // prints 2
```

From a browser, you can just load the module in a html page as:
```html
<script type="module">
    import * as bigintModArith from 'bigint-mod-arith-latest.browser.mod.min.js';

    let a = BigInt('5');
    let b = BigInt('2');
    let n = BigInt('19');

    console.log(bigintModArith.modPow(a, b, n)); // prints 6

    console.log(bigintModArith.modInv(BigInt('2'), BigInt('5'))); // prints 3

    console.log(bigintModArith.modInv(BigInt('3'), BigInt('5'))); // prints 2
</script>
```

# bigint-mod-arith JS Doc

## Functions

<dl>
<dt><a href="#abs">abs(a)</a> ⇒ <code>bigint</code></dt>
<dd><p>Absolute value. abs(a)==a if a&gt;=0. abs(a)==-a if a&lt;0</p>
</dd>
<dt><a href="#eGcd">eGcd(a, b)</a> ⇒ <code><a href="#egcdReturn">egcdReturn</a></code></dt>
<dd><p>An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm. 
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).</p>
</dd>
<dt><a href="#gcd">gcd(a, b)</a> ⇒ <code>bigint</code></dt>
<dd><p>Greatest-common divisor of two integers based on the iterative binary algorithm.</p>
</dd>
<dt><a href="#lcm">lcm(a, b)</a> ⇒ <code>bigint</code></dt>
<dd><p>The least common multiple computed as abs(a*b)/gcd(a,b)</p>
</dd>
<dt><a href="#modInv">modInv(a, n)</a> ⇒ <code>bigint</code></dt>
<dd><p>Modular inverse.</p>
</dd>
<dt><a href="#modPow">modPow(a, b, n)</a> ⇒ <code>bigint</code></dt>
<dd><p>Modular exponentiation a**b mod n</p>
</dd>
<dt><a href="#toZn">toZn(a, n)</a> ⇒ <code>bigint</code></dt>
<dd><p>Finds the smallest positive element that is congruent to a in modulo n</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#egcdReturn">egcdReturn</a> : <code>Object</code></dt>
<dd><p>A triple (g, x, y), such that ax + by = g = gcd(a, b).</p>
</dd>
</dl>

<a name="abs"></a>

## abs(a) ⇒ <code>bigint</code>
Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0

**Kind**: global function  
**Returns**: <code>bigint</code> - the absolute value of a  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 

<a name="eGcd"></a>

## eGcd(a, b) ⇒ [<code>egcdReturn</code>](#egcdReturn)
An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm. 
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).

**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="gcd"></a>

## gcd(a, b) ⇒ <code>bigint</code>
Greatest-common divisor of two integers based on the iterative binary algorithm.

**Kind**: global function  
**Returns**: <code>bigint</code> - The greatest common divisor of a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="lcm"></a>

## lcm(a, b) ⇒ <code>bigint</code>
The least common multiple computed as abs(a*b)/gcd(a,b)

**Kind**: global function  
**Returns**: <code>bigint</code> - The least common multiple of a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> \| <code>bigint</code> | 
| b | <code>number</code> \| <code>bigint</code> | 

<a name="modInv"></a>

## modInv(a, n) ⇒ <code>bigint</code>
Modular inverse.

**Kind**: global function  
**Returns**: <code>bigint</code> - the inverse modulo n  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>bigint</code> | The number to find an inverse for |
| n | <code>number</code> \| <code>bigint</code> | The modulo |

<a name="modPow"></a>

## modPow(a, b, n) ⇒ <code>bigint</code>
Modular exponentiation a**b mod n

**Kind**: global function  
**Returns**: <code>bigint</code> - a**b mod n  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>bigint</code> | base |
| b | <code>number</code> \| <code>bigint</code> | exponent |
| n | <code>number</code> \| <code>bigint</code> | modulo |

<a name="toZn"></a>

## toZn(a, n) ⇒ <code>bigint</code>
Finds the smallest positive element that is congruent to a in modulo n

**Kind**: global function  
**Returns**: <code>bigint</code> - The smallest positive representation of a in modulo n  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>bigint</code> | An integer |
| n | <code>number</code> \| <code>bigint</code> | The modulo |

<a name="egcdReturn"></a>

## egcdReturn : <code>Object</code>
A triple (g, x, y), such that ax + by = g = gcd(a, b).

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| g | <code>bigint</code> | 
| x | <code>bigint</code> | 
| y | <code>bigint</code> | 


* * *