'use strict';

describe('summary model', function () {

  var summary;

  var mockAPI = {
    search: function (articleURL, callback) {
      callback({ sentences: ["sentence 1", "sentence 2"] });
    }
  };

  var mockItem = {
    id: "sport/live/2017/nov/11/wrnational-live",
    webTitle: "testWebTitle",
    webUrl: "httpve",
    fields: {
      thumbnail: "thumbnailURL"
    }
  };

  beforeEach(function () {
    summary = new SummaryModel(mockAPI);
  })

  describe('fetchSummary', function () {

    it('fetches a text summary for an article', function () {
      summary.fetchSummary(mockItem, function (article) {
        expect(article.summary.sentences).toInclude('sentence 2');
      });
    });

  });
  
});
