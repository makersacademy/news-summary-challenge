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
    // console.log(aView.output())

    Test.assert(aView.output() == "<div><div><img src='PLACEHOLDER' class='image'><h1>The cats</h1><h3>Pets</h3><a href='www.cats.com' >Click here to read the full article</a><br><hr><br></div></div>", "Outputs a string of HTML")
  }

  static multiArticleOutput() {
    var bList = new ArticleList
    bList.createArticle("The cats", "www.cats.com", "Pets")
    bList.createArticle("The dogs", "www.dogs.com", "World News")

    var bView = new ArticleView(bList)

    // console.log(bView.output())

    Test.assert(bView.output() == "<div><div><img src='PLACEHOLDER' class='image'><h1>The cats</h1><h3>Pets</h3><a href='www.cats.com' >Click here to read the full article</a><br><hr><br></div><div><img src='PLACEHOLDER' class='image'><h1>The dogs</h1><h3>World News</h3><a href='www.dogs.com' >Click here to read the full article</a><br><hr><br></div></div>", "Outputs a longer string of HTML")
  }
}

ArticleViewSpec.checkAccessTest()
ArticleViewSpec.checkOutputTest()
ArticleViewSpec.multiArticleOutput()