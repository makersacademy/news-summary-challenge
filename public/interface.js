// The JS required to make the page dynamic.

var newsManager = new NewsManager()
newsManager.getArticles()

setTimeout(function(){
  var articlesDiv = newsManager.displayArticles()
  console.log(articlesDiv)

  setTimeout(function(){
    mainDiv.appendChild(articlesDiv)
  }, 500)
}, 1000)


var mainDiv = document.getElementById("mainDiv")

var showArticle = function(index) {
  var fullArticleView = newsManager.displayStory(index)
  var articlesView = document.getElementById('fullList')
  articlesView.parentNode.replaceChild(fullArticleView, articlesView)
}

var showFullList = function() {
  var shortArticlesView = newsManager.displayArticles()
  var fullArticleView = document.getElementById('singleArticle')
  fullArticleView.parentNode.replaceChild(shortArticlesView, fullArticleView)
}