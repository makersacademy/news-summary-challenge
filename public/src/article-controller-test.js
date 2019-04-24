function ArticlesListDouble() {
  this.listArray = [
    {
      webTitle: "Headline about cats",
      webUrl: "https://www.theguardian.com/lifeandstyle/2019/feb/17/hannah-jane-parkinson-cat-loves-to-be-petted-pleasure"
    },
    {
      webTitle: "Headline about cycling",
      webUrl: "https://www.theguardian.com/lifeandstyle/2018/mar/08/cycling-keeps-your-immune-system-young-study-finds"
    }
  ]
}

var articlesList = new ArticlesListDouble

function testsThingIsArticleControllerObject() {
  var testDescription = "testsThingIsArticleControllerObject"
  var articleController = new ArticleController(articlesList)
  assert.isTrue(articleController instanceof ArticleController, testDescription)
}
testsThingIsArticleControllerObject()

function testsControllerRendersArticlesList() {
  var testDescription = "testsControllerRendersArticlesList"
  var html = '<ul><li><a href="https://www.theguardian.com/lifeandstyle/2019/feb/17/hannah-jane-parkinson-cat-loves-to-be-petted-pleasure">Headline about cats</a></li><li><a href="https://www.theguardian.com/lifeandstyle/2018/mar/08/cycling-keeps-your-immune-system-young-study-finds">Headline about cycling</a></li></ul>'
  function elementDouble() {
    this.html = ""
  }

  var articleController = new ArticleController(articlesList)
  var newHtml = articleController.renderHtml(elementDouble)
  assert.isTrue(newHtml === html, testDescription)
}
testsControllerRendersArticlesList()