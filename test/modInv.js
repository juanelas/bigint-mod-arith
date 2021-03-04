'use strict'

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->
const _pkg = require('../lib/index.node')
const chai = require('chai')
// <--

const inputs = [
  {
    a: 1n,
    n: 19n,
    modInv: 1n
  },
  {
    a: 2n,
    n: 5n,
    modInv: 3n
  },
  {
    a: -2n,
    n: 5n,
    modInv: 2n
  },
  {
    a: 2n,
    n: 4n,
    modInv: NaN
  },
  {
    a: 0n,
    n: 0n,
    modInv: NaN
  },
  {
    a: 0n,
    n: 37n,
    modInv: NaN
  }
]

describe('modInv', function () {
  for (const input of inputs) {
    describe(`modInv(${input.a}, ${input.n})`, function () {
      it(`should return ${input.modInv}`, function () {
        const ret = _pkg.modInv(input.a, input.n)
        // chai.assert( String(ret) === String(input.modInv) );
        chai.expect(String(ret)).to.be.equal(String(input.modInv))
      })
    })
  }
})
