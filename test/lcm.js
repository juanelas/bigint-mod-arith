'use strict'

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->
const _pkg = require('../lib/index.node')
const chai = require('chai')
// <--

const inputs = [
  {
    a: 0n,
    b: 0n,
    lcm: 0n
  },
  {
    a: 1n,
    b: 1n,
    lcm: 1n
  },
  {
    a: 1n,
    b: 14546149867129487614601346814n,
    lcm: 14546149867129487614601346814n
  },
  {
    a: 27n,
    b: 18n,
    lcm: 27n * 2n
  },
  {
    a: -27n,
    b: 18n,
    lcm: 27n * 2n
  },
  {
    a: 168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109n,
    b: 168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109n * 144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243n,
    lcm: 168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109n * 144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243n
  }
]

describe('lcm', function () {
  for (const input of inputs) {
    describe(`lcm(${input.a}, ${input.b})`, function () {
      it(`should return ${input.lcm}`, function () {
        const ret = _pkg.lcm(input.a, input.b)
        chai.expect(ret).to.equal(input.lcm)
      })
    })
  }
})
