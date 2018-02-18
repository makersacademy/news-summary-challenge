'use strict';

(function (exports) {
  (function testSummaryView () {
    var summaryRequester = {
      summary: ["sentence one", "sentence two", "sentence three", "sentence four", "sentence five"]
    }

    var summaryView = new SummaryView(summaryRequester);

    assert.isTrue(summaryView.parse() === "<p id='summary'>sentence one sentence two sentence three sentence four sentence five </p>",
    "SummaryView.parse() renders the sentences as a <p>")
  })();
})(this);
