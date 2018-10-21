const ArticleBuilder = require('../lib/articleBuilder').default;

const pretzl = require('pretzl');

pretzl.batch('ArticleBuilder', () => {
  // set up mock article hash
  let mockArticle1 = {id: "1", webTitle: "webTitle1", webUrl: "webUrl1",
                    apiUrl: "apiUrl1", sentences: "sentences1", text: "text1",
                    fields: {thumbnail: "thumbnail1"}}

  let mockArticle2 = {id: "2", webTitle: "webTitle2", webUrl: "webUrl2",
                      apiUrl: "apiUrl2", sentences: "sentences2", text: "text2",
                      fields: {thumbnail: "thumbnail2"}}

  let mockArticles = [mockArticle1, mockArticle2]

  let mockDm = new pretzl.Bagel("mockDm", [["createElement"], ["addElement"], ["addText"],
                              ["createLinkElement"], ["createImgElement"]])

  let subject = new ArticleBuilder(mockArticles, mockDm)

  // tests
  pretzl.batch("instantiation", () => {
    pretzl.bag('adds argument to articles variable', () => {
      pretzl.bite(subject.articles).toTasteLike(mockArticles)
    })

    pretzl.bag('adds argument to articles variable', () => {
      pretzl.bite(subject.dm).toTasteLike(mockDm)
    })
  })

  pretzl.batch("buildArticleDiv", () => {
    pretzl.bag("calls dm.createElement", () => {
      subject.buildArticleDiv()
      pretzl.bite(mockDm, "createElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addElement", () => {
      subject.buildArticleDiv()
      pretzl.bite(mockDm, "addElement").toHaveBeenEaten()
    })
  })

  pretzl.batch("buildHeadline", () => {
    pretzl.bag("calls dm.createElement", () => {
      subject.buildHeadLine()
      pretzl.bite(mockDm, "createElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addElement", () => {
      subject.buildHeadLine()
      pretzl.bite(mockDm, "addElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addText", () => {
      subject.buildHeadLine()
      pretzl.bite(mockDm, "addText").toHaveBeenEaten()
    })
  })

  pretzl.batch("buildSummary", () => {
    pretzl.bag("calls dm.createElement", () => {
      subject.buildSummary()
      pretzl.bite(mockDm, "createElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addElement", () => {
      subject.buildSummary()
      pretzl.bite(mockDm, "addElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addText", () => {
      subject.buildSummary()
      pretzl.bite(mockDm, "addText").toHaveBeenEaten()
    })
  })

  pretzl.batch("buildLink", () => {
    pretzl.bag("calls dm.createLinkElement", () => {
      subject.buildLink()
      pretzl.bite(mockDm, "createLinkElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addElement", () => {
      subject.buildLink()
      pretzl.bite(mockDm, "addElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addText", () => {
      subject.buildLink()
      pretzl.bite(mockDm, "addText").toHaveBeenEaten()
    })
  })

  pretzl.batch("buildImg", () => {
    pretzl.bag("calls dm.createImgElement", () => {
      subject.buildImg()
      pretzl.bite(mockDm, "createImgElement").toHaveBeenEaten()
    })

    pretzl.bag("calls dm.addElement", () => {
      subject.buildImg()
      pretzl.bite(mockDm, "addElement").toHaveBeenEaten()
    })
  })

  pretzl.batch("renderArticles", () => {
    subject.renderArticles()
    pretzl.bag("calls createElement 3 x no of articles", () => {
      pretzl.bite(mockDm._count.createElement).toTasteLike(6)
    })

    pretzl.bag("calls createLinkElement 1 x no of articles", () => {
      pretzl.bite(mockDm._count.createLinkElement).toTasteLike(2)
    })


    pretzl.bag("calls createImgElement 1 x no of articles", () => {
      pretzl.bite(mockDm._count.createImgElement).toTasteLike(2)
    })

    pretzl.bag("calls addText 3 x no of articles", () => {
      pretzl.bite(mockDm._count.addText).toTasteLike(6)
    })

    pretzl.bag("calls addElement 5 x no of articles", () => {
      pretzl.bite(mockDm._count.addElement).toTasteLike(10)
    })
  })
})
