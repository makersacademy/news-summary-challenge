var list = new List();
var article = 'article';

var testList = [

  function() {
    list.addArticle(article)

    testEquals('Articles can be added to the list',
    list.articles.length,
    1
    )
  },

  function() {
    list.addArticle(article)
    var articles = list.getArticles()

    testEquals('List returns all articles (as array)',
    articles[0] + articles[1],
    'articlearticle'
    )
  },

  function() {
    var list = new List()
    list.createAndAddArticle('url', 'headline', 'text', 'thumbnail')

    testEquals('List creates(and adds) new articles',
    list.getArticles()[0].getUrl(),
    'url'
    )
  },

  function() {
    var idArticle = {
      getID: function() { return 2 }, headline: 'test'
    }
    list.addArticle(idArticle)

    testEquals('List can select article by id number',
    list.getArticleByID(2).headline,
    'test'
    )
  },

  function() {
    var list = new List()
    var stubData = [
    {"webTitle":"headline","webUrl":"url",
    "fields":{"thumbnail":"thumbnail","bodyText":"text"}},
    {"webTitle":"headline2","webUrl":"url2",
    "fields":{"thumbnail":"thumbnail2","bodyText":"text2"}}
    ]
    var stubSummary = new Stub(Article.prototype, 'createSummary', function() {})
    list.populateList(stubData)

    testEquals('List can be populated using a set of data',
    list.getArticles()[1].getThumbnail(),
    'thumbnail2'
    )

    stubSummary.restore()
  }

]

voodoo(testList)
