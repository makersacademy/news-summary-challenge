var article = new Article('url', 'headline', 'thumbnail')

var testList = [

  function() {
    testEquals('Article returns headline',
    article.getHeadline(),
    'headline'
    )
  },

  function() {
    testEquals('Article returns url',
    article.getUrl(),
    'url'
    )
  },

  function() {
    testEquals('Article returns thumbnail',
    article.getThumbnail(),
    'thumbnail'
    )
  },

  function() {
    article.setSummary('summary')
    testEquals('Article sets/gets summary',
    article.getSummary(),
    'summary'
    )
  },

  function() {
    var testID = function() {
      return 0;
    }
    var stub = new Stub(ArticleID.prototype, 'getID', testID)

    testEquals('Article returns id',
    article.getID(),
    0
    )

    stub.restore()
  },

  function() {
    var article = new Article('url', 'headline', 'thumbnail')
    var mockXHR = {
      open: function(stuff, moreStuff) {},
      onload: function() {},
      send: function() { article.setSummary('summary') }
    }
    article.createSummary(mockXHR)

    testEquals('Articles can create summaries of themselves',
    article.getSummary(),
    'summary'
    )
  }

]

voodoo(testList)
