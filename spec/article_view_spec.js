class ArticleViewSpec {

  static checkAccessTest() {
    var aList = new ArticleList
    aList.createArticle("The cats", "www.cats.com", "Pets")
    var aView = new ArticleView(aList)

    Test.assert(aView.articleList[0].title == "The cats", "The article view holds an article list object, that holds an article object")
  }

  static checkOutputTest() {
    var aList = new ArticleList
    aList.createArticle("The cats", "www.cats.com", "Pets")

    var aView = new ArticleView(aList)

    Test.assert(aView.output() == "<div><img src='PLACEHOLDER' class='image'><h1>The cats</h1><h3>Pets</h3><a href='www.cats.com'>Click here to read the full article</a><br><hr><br></div>", "Outputs a string of HTML"
    )
    
  }
}

ArticleViewSpec.checkAccessTest()
ArticleViewSpec.checkOutputTest()