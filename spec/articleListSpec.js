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

]

voodoo(testList)
