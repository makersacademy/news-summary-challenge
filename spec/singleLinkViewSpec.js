'use strict';

(function(exports) {
  (function testsingleLinkView () {

    var story = {
      webUrl: "https://fakenews.covfefe.com"
    }

    var singleLink = new SingleLinkView(story)

    assert.isTrue(singleLink.singleLinkHtml() === "<a href='https://fakenews.covfefe.com' id='articleLink'>See the whole story here</a>",
    "singleLinkHtml() creates a html link string with the webUrl of the story")

  })();

})(this)
