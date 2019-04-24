window.addEventListener('load', function() {
  setTimeout(function() {
    var articlesList = new ArticlesList
    setTimeout(function() {
      var articleController = new ArticleController(articlesList)
      articleController.renderHtml()
    }, 250)
  }, 250)
})
