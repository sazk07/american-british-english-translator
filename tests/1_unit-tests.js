import { assert } from "chai";
import { suite, test } from "mocha";
import { Translator } from '../components/translator.js'

suite('Unit Tests', () => {
  suite('American to British English', () => {
    test('Mangoes are my favorite fruit.', (done) => {
      const input = "Mangoes are my favorite fruit."
      const output = "Mangoes are my favourite fruit."
      const translation = Translator.translateAmericanToBritish(input)
      assert.strictEqual(translation, output)
      done()
    })
  })
})
