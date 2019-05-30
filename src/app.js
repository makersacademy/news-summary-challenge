(function(exports) {

  var headlinesController = new HeadlinesController()
  headlinesController.display()

  window.onhashchange = function () {
    var hash = location.hash.substring(1)
    console.log(hash)
    if (hash === 'headlines') {
      headlinesController = new HeadlinesController()
      headlinesController.display()
    } else {
      var app = document.getElementById('app')
      var headline = headlinesController.HeadlineList.get(parseInt(hash))
      headlinesController.displaySummary(headline)
    }
  }

  exports.headlinesController = headlinesController

})(this)
