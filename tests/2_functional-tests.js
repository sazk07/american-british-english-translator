import chai, { assert, use } from "chai";
import chaiHttp from "chai-http";
import { after, suite, test } from "mocha";
import { app } from "../app.js"

use(chaiHttp)

after(() => {
  chai.request(app).get('/api')
})

suite('Functional Tests', () => {
  suite("POST request to /api/translate", () => {
    test("POST with text and locale fields", (done) => {
      const text = "Mangoes are my favorite fruit."
      const locale = "american-to-british"
      const output = {
        text,
        translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
      }
      chai.request(app)
        .post('/api/translate')
        .send({ text, locale })
        .end((err, res) => {
          assert.notExists(err)
          assert.property(res.body, "text")
          assert.strictEqual(res.body.text, output.text)
          assert.property(res.body, "translation")
          assert.strictEqual(res.body.translation, output.translation)
          done()
        })
    })
    test("I ate yogurt for breakfast", (done) => {
      const text = "I ate yogurt for breakfast"
      const locale = "american-to-british"
      const output = {
        text,
        translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.'
      }
      chai.request(app)
      .post('/api/translate')
      .send(text, locale)
      .end((err, res) => {
          assert.notExists(err)
          assert.property(res.body, "text")
          assert.strictEqual(res.body.text, output.text)
          assert.property(res.body, "translation")
          assert.strictEqual(res.body.translation, output.translation)
        })
    })
  })
})
