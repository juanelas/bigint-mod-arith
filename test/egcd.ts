describe('egcd', function () {
  const inputs = [
    {
      a: 1,
      b: 1,
      egcd: {
        g: 1n,
        x: 1n,
        y: 0n
      }
    },
    {
      a: 1n,
      b: 1n,
      egcd: {
        g: 1n,
        x: 1n,
        y: 0n
      }
    },
    {
      a: 19168541349167916541934149125444444491635125783192549n,
      b: 1254366468914567943795n,
      egcd: {
        g: 3n,
        x: -51600903958588471463n,
        y: 788536751975320746859894014817801548390476186596482n
      }
    }
  ]
  for (const input of inputs) {
    describe(`eGcd(${input.a}, ${input.b})`, function () {
      it('should return the egcd', function () {
        const ret = _pkg.eGcd(input.a, input.b)
        chai.expect(ret).to.eql(input.egcd)
      })
    })
  }
})
