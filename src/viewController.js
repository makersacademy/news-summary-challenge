var ViewController = (function() {
  let headline = document.getElementById("headline")
  let goBack = document.getElementById("go-back")

  function showTargetView() {
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
    // let headline = document.getElementById("headline")
    // let goBack = document.getElementById("go-back")
    
    document.getElementById("main-content").innerHTML = articleView
    _hideElement(headline)
    _showElement(goBack)
  }

  function showHomepage() {
    let overview = newsManager.extractOverview()
    let formattedOverview = NewsFormatter.createArticleList(overview)
    // let headline = document.getElementById("headline")
    // let goBack = document.getElementById("go-back")

    document.getElementById("main-content").innerHTML = formattedOverview
    _hideElement(goBack)
    _showElement(headline)
    headline.innerHTML = 'Todays Headlines from The Guardian website'
  }

  function _showElement(element) {
    element.setAttribute("style", "display: inline-block;") 
  }

  function _hideElement(element) {
    element.setAttribute("style", "display: none;")
  }

  return {showTargetView}

})()
