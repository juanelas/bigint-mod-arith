describe('modPow', function () {
  const inputs = [
    {
      a: BigInt(4),
      b: BigInt(-1),
      n: BigInt(1),
      modPow: BigInt(0)
    },
    {
      a: BigInt(4),
      b: -1,
      n: BigInt(19),
      modPow: BigInt(5)
    },
    {
      a: BigInt(-5),
      b: BigInt(2),
      n: 7,
      modPow: BigInt(4)
    },
    {
      a: 2,
      b: BigInt(255),
      n: BigInt(64),
      modPow: BigInt(0)
    },
    {
      a: BigInt(3),
      b: BigInt(3),
      n: BigInt(25),
      modPow: BigInt(2)
    }
  ]
  const invalidInputs = [
    {
      a: BigInt(4),
      b: BigInt(-1),
      n: BigInt(0)
    }
  ]

  this.timeout(90000)
  for (const input of inputs) {
    describe(`modPow(${input.a}, ${input.b}, ${input.n})`, function () {
      it(`should return ${input.modPow}`, function () {
        const ret = _pkg.modPow(input.a, input.b, input.n)
        chai.expect(String(ret)).to.equal(String(input.modPow))
      })
    })
  }
  for (const input of invalidInputs) {
    describe(`modPow(${input.a}, ${input.b}, ${input.n})`, function () {
      it('should throw RangeError', function () {
        try {
          _pkg.modPow(input.a, input.b, input.n)
          throw new Error('should have failed')
        } catch (err) {
          chai.expect(err).to.be.instanceOf(RangeError)
        }
      })
    })
  }
  describe('Time profiling', function () {
    let iterations = 500
    it(`just testing ${iterations} iterations of a big modular exponentiation (1024 bits)`, function () {
      const p = BigInt('103920301461718841589267304263845359224454055603847417021399996422142529929535423886894599506329362009085557636432288745748144369296043048325513558512136442971686130986388589421125262751724362880217790112013162815676017250234401214198365302142787009943498370856167174244675719638815809347261773472114842038647')
      const b = BigInt('313632271690673451924314047671460131678794095260951233878123501752357966284491455239133687519908410656818506813151659324961829045286402303082891913186909806785080978448037486178337722667190743610785429936585699831407575170854873682955317589189564880931807976657385223632835801016017549762825562427694700595')
      const e = BigInt('452149997592306202232720864363485824701879487303880767747217308770351197801836846325633986474037061753983278534192061455638289551714281047915315943771002615269860312318606105460307037327329178890486613832051027105330475852552183444938408408863970975090778239473049899109989825645608770309107015209564444316')
      while (iterations > 0) {
        _pkg.modPow(b, e, p)
        iterations--
      }
    })
  })
})
