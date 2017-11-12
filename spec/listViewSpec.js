'use strict';

describe('list view', function () {

  var item = {
    id: "sport/live/2017/nov/11/wrnational-live",
    webTitle: "testWebTitle",
    webUrl: "httpve",
    fields: {
      thumbnail: "thumbnailURL"
    }
  };
  
  describe('listItemToHTML', function () {
    
    it('generates the HTML for an list item', function () {
      var listView = new ListView();
      expect(listView.listItemToHTML(item)).toEqual('<li><article class="article"><figure><img src=thumbnailURL></figure><p>testWebTitle</p></article></li >');
    });
  
  });

});
