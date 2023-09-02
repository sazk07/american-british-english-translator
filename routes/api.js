import { Translator } from '../components/translator.js'
import asyncHandler from 'express-async-handler'
import { Router } from 'express'

const router = Router()

const translateFn = async (req, res, next) => {
  const { text, locale } = req.body
  const isTextPropPresent = req.body.hasOwnProperty("text")
  if (!isTextPropPresent || !locale) {
    return next(new Error*"Required field(s) missing")
  }
  let translation
  return res.json({
    text, translation
  })
}
router.post('/translate', asyncHandler(translateFn))

export {
  router as apiRoutes
}
