var ViewController = (function() {
  let headline = document.getElementById("headline")
  let goBack = document.getElementById("go-back")
  let mainContent = document.getElementById("main-content")

  function showTargetView() {
    let targetView = window.location.hash //#article-0 / #summary-0
    
    if (targetView.includes('article')) {
      _showFullArticle(targetView)
    } else if (targetView.includes('summary')) {
      _showSummarizedArticle(targetView)
    } else if (!window.location.hash) {
      _showHomepage()
    } else {
      console.log('This page does not exist')  
    }    
  }

  function _showFullArticle(targetView) {
    let articleIndex = parseInt(targetView.split('-')[1])
    let fullArticleInformation = newsManager.extractArticle(articleIndex)
    let articleView = NewsFormatter.createFullArticleView(fullArticleInformation)
    
    mainContent.innerHTML = articleView
    _hideElement(headline)
    _showElement(goBack)
  }

  function _showSummarizedArticle(targetView) {
    let articleIndex = parseInt(targetView.split('-')[1])
    let fullArticleInformation = newsManager.extractArticle(articleIndex)
    let articleurl = fullArticleInformation.webURL

    APIQuerySymmarize(articleurl, function (textSummaryObject) {
      let articleSummaryView = NewsFormatter.createSummarizedArticleView(textSummaryObject, fullArticleInformation)
      
      mainContent.innerHTML = articleSummaryView
      _hideElement(headline)
      _showElement(goBack)
    })
  }

  function _showHomepage() {
    let overview = newsManager.extractOverview()
    let formattedOverview = NewsFormatter.createArticleList(overview)
    
    mainContent.innerHTML = formattedOverview
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
