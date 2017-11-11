'use strict';

describe('list view', function () {

  var list = {
    getItem: function() {
      return {
        id: "sport/live/2017/nov/11/wrnational-live",
        webTitle: "testWebTitle",
        webUrl: "httpve",
        fields: {
          thumbnail: "thumbnailURL"
        }
      }
    }
  };
  
  describe('listItemToHTML', function () {
    
    it('generates the HTML for an list item', function () {
      var listView = new ListView(list);
      expect(listView.listItemToHTML(1)).toInclude('testWebTitle');
    });
  
  });

});
