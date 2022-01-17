describe('bitLength', function () {
  const inputs = [
    {
      value: BigInt(1),
      bitLength: 1
    },
    {
      value: 15,
      bitLength: 4
    },
    {
      value: BigInt(-2),
      bitLength: 2
    },
    {
      value: BigInt('11592217955149597331'),
      abs: BigInt('11592217955149597331'),
      bitLength: 64
    }
  ]
  for (const input of inputs) {
    describe(`bitLength(${input.value})`, function () {
      it(`should return ${input.bitLength}`, function () {
        const ret = _pkg.bitLength(input.value)
        chai.expect(ret).to.equal(input.bitLength)
      })
    })
  }
})
