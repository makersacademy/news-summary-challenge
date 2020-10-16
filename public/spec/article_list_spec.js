class ArticleListSpec {

  static addArticleTest() {

    var object = JSON.parse('{"webTitle":"The cats", "webUrl":"www.cats.com", "sectionId":"Pets"}')
    var article = new Article(object.webTitle, object.webUrl, object.sectionId)
    var list = new ArticleList

    list.addArticle(article)

    Test.assert(list.articles[0].title == "The cats", "Adds a note to the list in the constructor")

  }

  static createArticleTest() {
    var list = new ArticleList
    list.createArticle("The cats", "www.cats.com", "Pets")

    Test.assert(list.articles[0].title == "The cats", "Article list can create a new article object (test title)")
    Test.assert(list.articles[0].url == "www.cats.com", "Article list can create a new article object (test url)") 
  }
}

ArticleListSpec.addArticleTest()
ArticleListSpec.createArticleTest()