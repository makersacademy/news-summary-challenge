'use strict';

describe('list model', function () {

  var mockAPI = {
    search: function () {
      return {
        response: {
          results: [
            {
              id: "sport/live/2017/nov/11/wrnational-live",
              webTitle: "testArticle",
              webUrl: "httpve",
            },
            {
              id: "second Article",
              webTitle: "testArticle2",
              webUrl: "http...URL",
            },
          ]
        }
      }
    }
  };

  var list;

  beforeEach(function () {
    list = new ListModel(mockAPI);
  })

  describe('fetchHeadlines', function () {
    
    it('fetches all current headlines', function () {
      list.fetchHeadlines()
      expect(list.getItem(1).webTitle).toEqual("testArticle");
    });

  });

  describe('getArticle', function () {
    
    it('return an article from the list', function () {
      list.fetchHeadlines()
      expect(list.getItem(2).webTitle).toEqual("testArticle2");
    });

  });

});
