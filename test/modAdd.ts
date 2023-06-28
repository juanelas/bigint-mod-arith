import * as bma from '#pkg'

describe('modAdd', function () {
  const inputs = [
    {
      addends: [1n, 14n, 5n],
      n: 5n,
      result: 0n
    },
    {
      addends: [98146598146508942650812465n, 971326598235697821592183520352089356n],
      n: 972136523n,
      result: 88640188n
    },
    {
      addends: [98146598146508942650812465n, -971326598235697821592183520352089356n],
      n: 972136523n,
      result: 133225889n
    }
  ]

  for (const input of inputs) {
    describe(`modAdd([${input.addends.toString()}], ${input.n})`, function () {
      it(`should return ${input.result}`, function () {
        const ret = bma.modAdd(input.addends, input.n)
        // chai.assert( String(ret) === String(input.modInv) );
        chai.expect(String(ret)).to.be.equal(String(input.result))
      })
    })
  }
})
