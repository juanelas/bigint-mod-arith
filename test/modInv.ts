import * as bma from '#pkg'

describe('modInv', function () {
  const inputs = [
    {
      a: BigInt(1),
      n: BigInt(19),
      modInv: BigInt(1)
    },
    {
      a: BigInt(2),
      n: BigInt(5),
      modInv: BigInt(3)
    },
    {
      a: BigInt(-2),
      n: BigInt(5),
      modInv: BigInt(2)
    }]

  const invalidInputs = [
    {
      a: BigInt(2),
      n: BigInt(4)
    },
    {
      a: BigInt(0),
      n: BigInt(0)
    },
    {
      a: BigInt(0),
      n: BigInt(37)
    }
  ]
  for (const input of inputs) {
    describe(`modInv(${input.a}, ${input.n})`, function () {
      it(`should return ${input.modInv}`, function () {
        const ret = bma.modInv(input.a, input.n)
        // chai.assert( String(ret) === String(input.modInv) );
        chai.expect(String(ret)).to.be.equal(String(input.modInv))
      })
    })
  }
  for (const input of invalidInputs) {
    describe(`modInv(${input.a}, ${input.n})`, function () {
      it('should throw RangeError', function () {
        try {
          bma.modInv(input.a, input.n)
          throw new Error('should have failed')
        } catch (err) {
          chai.expect(err).to.be.instanceOf(RangeError)
        }
      })
    })
  }
})
