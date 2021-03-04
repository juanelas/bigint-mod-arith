'use strict'

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->
const _pkg = require('../lib/index.node')
const chai = require('chai')
// <--

const inputs = [
  {
    value: 1n,
    bitLength: 1
  },
  {
    value: -2n,
    bitLength: 2
  },
  {
    value: 11592217955149597331n,
    abs: 11592217955149597331n,
    bitLength: 64
  }
]

describe('bitLength', function () {
  for (const input of inputs) {
    describe(`bitLength(${input.value})`, function () {
      it(`should return ${input.bitLength}`, function () {
        const ret = _pkg.bitLength(input.value)
        chai.expect(ret).to.equal(input.bitLength)
      })
    })
  }
})
