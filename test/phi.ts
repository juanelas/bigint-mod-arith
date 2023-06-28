import * as bma from '#pkg'

describe('phi', function () {
  const tests = [
    {
      input: [[17n, 1n], [19n, 1n]] as bma.PrimeFactorization,
      output: (17n - 1n) * (19n - 1n)
    },
    {
      input: [[17n, 4n]] as bma.PrimeFactorization,
      output: (17n ** 3n) * 16n
    }
  ]
  for (const test of tests) {
    describe(`phi([${test.input.toString()}])`, function () {
      it(`should return ${test.output}`, function () {
        const ret = bma.phi(test.input)
        chai.expect(ret).to.equal(test.output)
      })
    })
  }
})
