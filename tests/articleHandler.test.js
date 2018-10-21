const ArticleHandler = require('../lib/articleHandler').default;

const pretzl = require('pretzl');

pretzl.batch("ArticleHandler", () => {
  let mockGuardian = new pretzl.Bagel("mockG", [["getApi"]])
  let mockAylien = new pretzl.Bagel("mockA", [["getSummary"]])
  let subject = new ArticleHandler(mockGuardian, mockAylien)
  pretzl.batch("initalisation", () => {
    pretzl.bag("mockguardian injected", () => {
      pretzl.bite(subject.gh).toTasteLike(mockGuardian)
    })

    pretzl.bag("mockguardian injected", () => {
      pretzl.bite(subject.ah).toTasteLike(mockAylien)
    })
  })

  // cannot pass due to lack of promise handling in testing framework

  // pretzl.batch("getEverything", () => {
  //   pretzl.bag("getApi called on Guardian", () => {
  //     subject.getEverything()
  //     pretzl.bite(mockGuardian, "getApi").toHaveBeenEaten()
  //   })

    // pretzl.bag("getApi called on Guardian", () => {
    //   mockGuardian.stub("getApi", Promise.resolve([1,2,3,4]))
    //   subject.getEverything()
    //   pretzl.bite(mockAylien, "getSummary").toHaveBeenEaten()
    // })
  // })
})
