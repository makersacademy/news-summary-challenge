const AylienHandler = require('../lib/aylienHandler').default;

const pretzl = require('pretzl');

pretzl.batch("AylienHandler", () => {
  let apiKey = "apikey"
  let appId = "appId"
  let subject = new AylienHandler(apiKey, appKey)
  pretzl.batch("initialisation", () => {
    pretzl.bag("apikey set to first arg", () => {
      pretzl.bite(subject.apiKey).toTasteLike(apiKey)
    })

    pretzl.bag("appId set to first arg", () => {
      pretzl.bite(subject.appIdy).toTasteLike(appId)
    })
  })
})
