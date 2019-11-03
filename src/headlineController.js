(function(exports) {
  function headlineController (headlineView = new View( new APIHeadline()) ) {
    this.view = headlineView
  }

  // var controller = new headlineController()
  // controller.view.api.getData()
  // controller.view.api.getHeadlines()

  headlineController.prototype.insertHTML = function (doc = document) {
    var element = doc.getElementById('headlines')
    return element.innerHTML = this.view.headlinesToHTML()
  }
  exports.headlineController = headlineController
})(this)