'use strict';

describe('list model', function () {

  var mockAPI = {
    search: function () {
      return 'id: type: sectionId: sectionName: webPublicationDate: webTitle: webUrl: apiUrl:isHosted: pillarId: pillarName';
    }
  };

  var list = new List(mockAPI);
  
  describe('fetchHeadlines', function () {
    
    it('fetches all current headlines', function () {
      expect(list.fetchHeadlines()).toInclude('id: type: sectionId: sectionName: webPublicationDate: webTitle: webUrl: apiUrl:isHosted: pillarId: pillarName');
    });

  });

});
