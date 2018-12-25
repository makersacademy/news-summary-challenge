'use strict';

var heading = Heading

tea.describe('heading', function() {
  tea.it('renders the heading', function() {
    var expected = [
        "<div class='container text-center'>",
          "<h1>",
            "NewsFeed",
          "</h1>",
        "</div>"
      ].join("")
    var result = heading()
    tea.check(expected === result)
  })
})
