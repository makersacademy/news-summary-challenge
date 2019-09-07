// The JS required to make the page dynamic.

let newsManager = new NewsManager()
newsManager.getArticles()
newsManager.displayArticles()

var mainDiv = document.getElementById("mainDiv")

setTimeout(function(){
  mainDiv.appendChild(articlesDiv)
}, 5000)