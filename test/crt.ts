import * as bma from '#pkg'

describe('crt', function () {
  const tests = [
    {
      input: {
        remainders: [2n, 3n, 10n],
        modulos: [5n, 7n, 11n]
      },
      output: 87n
    },
    {
      input: {
        remainders: [3n, 3n, 4n],
        modulos: [7n, 5n, 12n],
        modulo: 7n * 5n * 12n
      },
      output: 388n
    }
  ]
  const invalidTests = [
    {
      input: {
        remainders: [2n, 3n, 10n],
        modulos: [5n, 7n]
      },
      output: 87n
    }
  ]
  for (const test of tests) {
    describe(`crt([${test.input.remainders.toString()}], [${test.input.modulos.toString()}])`, function () {
      it(`should return ${test.output}`, function () {
        const ret = bma.crt(test.input.remainders, test.input.modulos, test.input.modulo)
        chai.expect(ret).to.equal(test.output)
      })
    })
  }
  for (const test of invalidTests) {
    describe(`crt([${test.input.remainders.toString()}], [${test.input.modulos.toString()}])`, function () {
      it('should throw RangeError', function () {
        try {
          bma.crt(test.input.remainders, test.input.modulos)
          throw new Error('should have failed')
        } catch (err) {
          chai.expect(err).to.be.instanceOf(RangeError)
        }
      })
    })
  }
})
