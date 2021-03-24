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
  for (const input of inputs) {
    describe(`toZn(${input.a}, ${input.n})`, function () {
      it(`should return ${input.toZn}`, function () {
        const ret = _pkg.toZn(input.a, input.n)
        chai.expect(ret).to.equal(input.toZn)
      })
    })
  }
})
