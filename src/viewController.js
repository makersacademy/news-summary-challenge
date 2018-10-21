var ViewController = (function() {
  let headline = document.getElementById("headline")
  let goBack = document.getElementById("go-back")
  let mainContent = document.getElementById("main-content")

  // navigates between the different views according to the window location hash
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
  // renders full article view from 'news formatter'
  function _showFullArticle(targetView) {
    let articleIndex = parseInt(targetView.split('-')[1])
    let fullArticleInformation = newsManager.extractArticle(articleIndex)
    let articleView = NewsFormatter.createFullArticleView(fullArticleInformation)
    
    mainContent.innerHTML = articleView
    _hideElement(headline)
    _showElement(goBack)
  }
  // renders summarized article view from 'news formatter'
  function _showSummarizedArticle(targetView) {
    let articleIndex = parseInt(targetView.split('-')[1])
    let fullArticleInformation = newsManager.extractArticle(articleIndex)
    let articleurl = fullArticleInformation.webURL
    // sends query to Aylien API, getting back json object, the text of which is parsed into a javascript object ('textSummaryObject') containing text summary (and full text)
    APIQuerySymmarize(articleurl, function (textSummaryObject) {
      let articleSummaryView = NewsFormatter.createSummarizedArticleView(textSummaryObject, fullArticleInformation)
      
      mainContent.innerHTML = articleSummaryView
      _hideElement(headline)
      _showElement(goBack)
    })
  }
  // renders homepage view / article list view from 'news formatter'
  function _showHomepage() {
    let overview = newsManager.extractOverview()
    let formattedOverview = NewsFormatter.createArticleList(overview)
    
    mainContent.innerHTML = formattedOverview
    _hideElement(goBack)
    _showElement(headline)
    headline.innerHTML = 'Todays Headlines from The Guardian website'
  }
  // toggles visibility of elements
  function _showElement(element) {
    element.setAttribute("style", "display: inline-block;") 
  }

  function _hideElement(element) {
    element.setAttribute("style", "display: none;")
  }
  // allows access to routing/navigation function
  return {showTargetView}

})()
