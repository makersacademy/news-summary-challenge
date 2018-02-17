'use strict';

(function (exports) {
  (function testHeadlineRequester () {
    var headlines = [
      {id: "politics/2018/feb/17/neil-kinnock-jeremy-corbyn-labour-stop-brexit-save-nhs", type: "article", dontreturn: "this one"},
      {id: "sport/live/2018/feb/17/george-groves-v-chris-eubank-jr-world-boxing-super-series-live", type: "article", return: "this one"}
    ]

    var headlineRequester = new HeadlineRequester("empty", headlines);

    assert.isTrue(headlineRequester.findHeadlineById("sport/live/2018/feb/17/george-groves-v-chris-eubank-jr-world-boxing-super-series-live"),
    "Headline can be found by ID")
  })();
})(this)
