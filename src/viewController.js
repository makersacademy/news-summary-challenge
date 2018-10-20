
var ViewController = (function() {

  function showSelectedView() {
    let targetView = window.location.hash //#article-0
    if (targetView.includes('article')) {
      showFullArticle(targetView)
    } else if (!window.location.hash) {
      showHomepage()
    } else {
      console.log('This page does not exist')  
    }    
  }

  function showFullArticle(targetView) {
    let articleIndex = parseInt(targetView.split('-')[1])
    let fullArticleInformation = newsManager.extractArticle(articleIndex)
    let articleView = NewsFormatter.createFullArticleView(fullArticleInformation)
    document.getElementById("main-content").innerHTML = articleView
  }

  function showHomepage() {
    let overview = newsManager.extractOverview()
    let formattedOverview = NewsFormatter.createArticleList(overview)
    document.getElementById("main-content").innerHTML = formattedOverview
  }

  return {showSelectedView}

})()
