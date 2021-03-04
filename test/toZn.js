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
    toZn: 1n
  },
  {
    a: -25n,
    n: 9n,
    toZn: 2n
  },
  {
    a: 12359782465012847510249n,
    n: 5n,
    toZn: 4n
  }
]

describe('toZn', function () {
  for (const input of inputs) {
    describe(`toZn(${input.a}, ${input.n})`, function () {
      it(`should return ${input.toZn}`, function () {
        const ret = _pkg.toZn(input.a, input.n)
        chai.expect(ret).to.equal(input.toZn)
      })
    })
  }
})
