'use strict';

describe('list view', function () {

  var list = {
    getArticle: function() {
      return {
        id: "sport/live/2017/nov/11/wrnational-live",
        webTitle: "testWebTitle",
        webUrl: "httpve",
      }
    }
  };
  
  describe('renderList', function () {
    
    it('renders the HTML for an article summary', function () {
      var listView = new ListView(list);
      expect(listView.renderListItem(1)).toInclude('testWebTitle');
    });
  
  });

});
