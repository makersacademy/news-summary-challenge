// The JS required to make the page dynamic.

var newsManager = new NewsManager()
newsManager.getArticles()
newsManager.displayArticles()
newsManager.displayStories()

var mainDiv = document.getElementById("mainDiv")

setTimeout(function(){
  mainDiv.appendChild(articlesDiv)
  mainDiv.appendChild(fullArticlesDiv)
}, 1500)

var hideFullList = function() {
  var fullList = document.getElementById('fullList')
  fullList.setAttribute('hidden', 'hidden')
}

var showArticle = function(index) {
  console.log('article-' + index)
  var article = document.getElementById('article-' + index)
  article.removeAttribute('hidden')
}