'use strict';

describe('news', function () {

  var mockAPI = {
    search: function() {
      return 'id: type: sectionId: sectionName: webPublicationDate: webTitle: webUrl: apiUrl:isHosted: pillarId: pillarName';
    }
  }

  var news = new News(mockAPI);
  
  describe('fetchHeadlines', function () {
    
    it('fetches all current headlines', function () {
      expect(news.fetchHeadlines()).toInclude('id: type: sectionId: sectionName: webPublicationDate: webTitle: webUrl: apiUrl:isHosted: pillarId: pillarName');
    });

  });

});
