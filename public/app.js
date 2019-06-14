// window.addEventListener('load', function() {
  var articleController
  setTimeout(function() {
    var articlesList = new ArticlesList
    setTimeout(function() {
      articleController = new ArticleController(articlesList)
      articleController.renderHtml()
      window.addEventListener("hashchange", articleController.renderSummary);
    }, 250)
  }, 250)
// })
  

// So far unsuccessful in creating a callback that...
// 1. creates a new ArticlesList
// 2. when this is completed, creates a new ArticlesController
// 3. calls .renderHtml()