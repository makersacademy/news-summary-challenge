// User story 1: List view
// -----------------------
// As a busy politician,
// so I know what the big stories of the day are,
// I want to see all of today's headlines in one place.

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

function testsViewReturnsHtml() {
  var testDescription = "testsViewReturnsHtml"
  var articlesList = new ArticlesListDouble
  var articlesListView = new ArticlesListView(articlesList)
  var html = '<ul><li><a href="https://www.theguardian.com/lifeandstyle/2019/feb/17/hannah-jane-parkinson-cat-loves-to-be-petted-pleasure">Headline about cats</a></li><li><a href="https://www.theguardian.com/lifeandstyle/2018/mar/08/cycling-keeps-your-immune-system-young-study-finds">Headline about cycling</a></li></ul>'
  setTimeout(function() {
    assert.isTrue(articlesListView.returnHtml() === html, testDescription)
  }, 500)
}
testsViewReturnsHtml()