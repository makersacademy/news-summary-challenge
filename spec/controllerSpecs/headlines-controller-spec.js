(function() {

  (function() {
    var description = "HeadlinesController.display gets the headlines via APIInterface, applies HeadlineListView, and displays them"

    function APIInterfaceMock () {
      this.getHeadlines = function () {
        return "the headlines"
      }
    }

    function headlineListViewMock (headlineList) {
      this.getHTML = function() {
        return headlineList + " converted to HTML"
      }
    }

    var headlinesController = new HeadlinesController(headlineListViewMock, APIInterfaceMock)
    var target = document.createElement('div')
    headlinesController.display(target)
    var contents = target.innerHTML
    assert.isTrue(
      contents === "the headlines converted to HTML",
      description
    )

  })()

})()
