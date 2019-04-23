(function() {

  (function() {
    var description = "HeadlinesController.display basically just passes a callback through to APIInterface.getHeadlines()"

    function APIInterfaceMock () {
      this.getHeadlines = function (callback) {
        callback("the headlines")
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
