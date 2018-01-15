document.addEventListener("DOMContentLoaded", function(event) {
  window.addEventListener('hashchange', showArticleSummaryPage)
})

var showArticleSummaryPage = function() {
  var id = getArticleIDFromUrl(window.location)
  var article = controller.list.getArticleByID(id)
  displaySummaryArticle(article, 'content')
}

var getArticleIDFromUrl = function(location) {
  return parseInt(location.hash.split("#")[1].split('/')[1])
}

var displaySummaryArticle = function(article, elementID) {
  var articleView = new ArticleView(article)
  document.getElementById(elementID).innerHTML = articleView.returnHTML()
}

controller = new Controller()
controller.populateList()
