document.addEventListener("DOMContentLoaded", function(event) {
  var pageUpdater = function() {
    window.addEventListener('hashchange', showArticleSummaryPage)
  }
})
  controller = new Controller()
  controller.populateList()
  //controller.printArticleList('content')
