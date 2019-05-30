(function() {

  describe("HeadlinesController", function() {
    describe(".display()", function() {
      it('passes a callback through to APIInterface.getHeadlines()', function() {
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

        expect(contents).toBe("the headlines converted to HTML")
      })
    })
  })
})()
