'use strict';

describe('summary view', function () {
  
  describe('articleSummaryToHTML', function () {

    var item = {
      id: "sport/live/2017/nov/11/wrnational-live",
      webTitle: "testWebTitle",
      webUrl: "httpve",
      fields: { thumbnail: "thumbnailURL" },
      summary: { "sentences": ["this is a summary"] }
    };

    it('generates the HTML for an article summary', function () {
      expect(summaryView.articleSummaryToHTML(item)).toEqual('<article id="articleSummary"><figure><img src=thumbnailURL></figure><h1>testWebTitle</h1><p>this is a summary</p></article>');
    });

  });
  
})
