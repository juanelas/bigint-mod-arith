'use strict'

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->
const _pkg = require('../lib/index.node')
const chai = require('chai')
// <--

const inputs = [
  {
    a: 4n,
    b: -1n,
    n: 0n,
    modPow: NaN
  },
  {
    a: 4n,
    b: -1n,
    n: 1n,
    modPow: 0n
  },
  {
    a: 4n,
    b: -1n,
    n: 19n,
    modPow: 5n
  },
  {
    a: -5n,
    b: 2n,
    n: 7n,
    modPow: 4n
  },
  {
    a: 2n,
    b: 255n,
    n: 64n,
    modPow: 0n
  },
  {
    a: 3n,
    b: 3n,
    n: 25n,
    modPow: 2n
  }
]

describe('modPow', function () {
  this.timeout(90000)
  for (const input of inputs) {
    describe(`modPow(${input.a}, ${input.b}, ${input.n})`, function () {
      it(`should return ${input.modPow}`, function () {
        const ret = _pkg.modPow(input.a, input.b, input.n)
        chai.expect(String(ret)).to.equal(String(input.modPow))
      })
    })
  }
  describe('Time profiling', function () {
    let iterations = 500
    it(`just testing ${iterations} iterations of a big modular exponentiation (1024 bits)`, function () {
      const p = 103920301461718841589267304263845359224454055603847417021399996422142529929535423886894599506329362009085557636432288745748144369296043048325513558512136442971686130986388589421125262751724362880217790112013162815676017250234401214198365302142787009943498370856167174244675719638815809347261773472114842038647n
      const b = 313632271690673451924314047671460131678794095260951233878123501752357966284491455239133687519908410656818506813151659324961829045286402303082891913186909806785080978448037486178337722667190743610785429936585699831407575170854873682955317589189564880931807976657385223632835801016017549762825562427694700595n
      const e = 452149997592306202232720864363485824701879487303880767747217308770351197801836846325633986474037061753983278534192061455638289551714281047915315943771002615269860312318606105460307037327329178890486613832051027105330475852552183444938408408863970975090778239473049899109989825645608770309107015209564444316n
      while (iterations > 0) {
        _pkg.modPow(b, e, p)
        iterations--
      }
    })
  })
})
