'use strict';

describe('list view', function () {

  var item = {
    id: "testId",
    webTitle: "testWebTitle",
    webUrl: "httpve",
    fields: {
      thumbnail: "thumbnailURL"
    }
  };

  var summary = {
    "sentences": ["this is a summary"]
  }
  
  describe('listItemToHTML', function () {
    it('generates the HTML for an list item', function () {
      expect(listView.listItemToHTML(item)).toEqual('<a href="#testId"><article class="article"><figure><img src=thumbnailURL></figure><p>testWebTitle</p></article></a>');
    });
  
  });

});
