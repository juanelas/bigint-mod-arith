import * as bma from '#pkg'

describe('modMultiply', function () {
  const inputs = [
    {
      factors: [-1n, 1n, 19n],
      n: 5n,
      result: 1n
    },
    {
      factors: [98146598146508942650812465n, 971326598235697821592183520352089356n],
      n: 972136523n,
      result: 326488233n
    },
    {
      factors: [98146598146508942650812465n, -971326598235697821592183520352089356n],
      n: 972136523n,
      result: 645648290n
    }
  ]

  for (const input of inputs) {
    describe(`modMultiply([${input.factors.toString()}], ${input.n})`, function () {
      it(`should return ${input.result}`, function () {
        const ret = bma.modMultiply(input.factors, input.n)
        chai.expect(String(ret)).to.be.equal(String(input.result))
      })
    })
  }
})
