# bigint-mod-arith 

Some extra functions to work with modular arithmetics using native JS (stage 3) implementation of BigInt.

## Usage examples

```javascript
const modArith = require('bigint-mod-arith');

let a = 5n;
let b = 2n;
let n = 19n;

console.log(modArith.modPow(a, b, n)); // prints 13

console.log(modArith.modInv(2n, 5n)); // prints 3

console.log(modArith.modInv(3n, 5n)); // prints 2
```

## Functions

<dl>
<dt><a href="#abs">abs(a)</a> ⇒ <code>bigint</code></dt>
<dd><p>Absolute value. abs(a)==a if a&gt;=0. abs(a)==-a if a&lt;0</p>
</dd>
<dt><a href="#gcd">gcd(a, b)</a> ⇒ <code>bigint</code></dt>
<dd><p>Greatest-common divisor of two integers based on the iterative binary algorithm.</p>
</dd>
<dt><a href="#lcm">lcm(a, b)</a> ⇒ <code>bigint</code></dt>
<dd><p>The least common multiple computed as abs(a*b)/gcd(a,b)</p>
</dd>
<dt><a href="#toZn">toZn(a, n)</a> ⇒ <code>bigint</code></dt>
<dd><p>Finds the smallest positive element that is congruent to a in modulo n</p>
</dd>
<dt><a href="#eGcd">eGcd(a, b)</a> ⇒ <code><a href="#egcdReturn">egcdReturn</a></code></dt>
<dd><p>An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm. 
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).</p>
</dd>
<dt><a href="#modInv">modInv(a, n)</a> ⇒ <code>bigint</code></dt>
<dd><p>Modular inverse.</p>
</dd>
<dt><a href="#modPow">modPow(a, b, n)</a> ⇒ <code>bigint</code></dt>
<dd><p>Modular exponentiation a**b mod n</p>
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

<a name="toZn"></a>

## toZn(a, n) ⇒ <code>bigint</code>
Finds the smallest positive element that is congruent to a in modulo n

**Kind**: global function  
**Returns**: <code>bigint</code> - The smallest positive representation of a in modulo n  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>bigint</code> | An integer |
| n | <code>number</code> \| <code>bigint</code> | The modulo |

<a name="eGcd"></a>

## eGcd(a, b) ⇒ [<code>egcdReturn</code>](#egcdReturn)
An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm. 
Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).

**Kind**: global function  

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
