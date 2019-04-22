(function() {

  (function() {
    var description = "HeadlineListView turns a HeadlineList into a string of HTML"

    function HeadlineListMock() {
      this.all = function () {
        arrayOfHeadlineMocks = [{ getHeadline: function () {
                                    return "Headline 1"
                                }},
                                { getHeadline: function () {
                                    return "Headline 2"
                                }}]
        return arrayOfHeadlineMocks
      }
    }

    function HeadlineViewMock(headline) {
      this.getHTML = function () {
        return `<div class="headline">${headline.getHeadline()}</div>`
      }
    }

    var headlineList = new HeadlineListMock()
    var view = new HeadlineListView(headlineList, HeadlineViewMock)
    assert.isTrue(
      view.getHTML() === '<div id="headline-list">' +
                           '<div class="headline">Headline 1</div>' +
                           '<div class="headline">Headline 2</div>' +
                         '</div>',
      description
    )
 
  })()

})()
