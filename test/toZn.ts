import * as bma from '#pkg'

describe('toZn', function () {
  const inputs = [
    {
      a: BigInt(1),
      n: BigInt(19),
      toZn: BigInt(1)
    },
    {
      a: -25,
      n: BigInt(9),
      toZn: BigInt(2)
    },
    {
      a: BigInt('12359782465012847510249'),
      n: 5,
      toZn: BigInt(4)
    }
  ]
  const invalidInputs = [
    {
      a: BigInt(4),
      n: BigInt(-1),
      toZn: BigInt(0)
    }
  ]
  for (const input of inputs) {
    describe(`toZn(${input.a}, ${input.n})`, function () {
      it(`should return ${input.toZn}`, function () {
        const ret = bma.toZn(input.a, input.n)
        chai.expect(ret).to.equal(input.toZn)
      })
    })
  }
  for (const input of invalidInputs) {
    describe(`toZn(${input.a}, ${input.n})`, function () {
      it('should throw RangeError', function () {
        try {
          bma.toZn(input.a, input.n)
          throw new Error('should have failed')
        } catch (err) {
          chai.expect(err).to.be.instanceOf(RangeError)
        }
      })
    })
  }
})
