const GuardianHandler = require('../lib/guardianHandler').default;

const pretzl = require('pretzl');


pretzl.batch("guardianHandler", () => {
  let subject = new GuardianHandler("test")
  let apiLink = "https://content.guardianapis.com/search?show-fields=thumbnail&api-key="
  pretzl.bag("Api link includes key", () => {
    pretzl.bite(subject.apiLink).toTasteLike(apiLink + "test")
  })
})
