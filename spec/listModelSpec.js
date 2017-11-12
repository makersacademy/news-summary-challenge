'use strict';

describe('list model', function () {

  var mockData = {
    content: {
      id: "sport/live/2017/nov/11/wrnational-live",
      webTitle: "testArticle",
      webUrl: "httpve",
    }
  }
  
  var mockAPI = {
    search: function (params, callback, id = '') {
      if (id === '') {
        callback({
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
        })
      } else {
        callback({
          response: mockData
        });
      }
    }
  };

  var list;

  beforeEach(function () {
    list = new ListModel(mockAPI);
  })

  describe('fetchArticle', function () {
    
    it('fetches all current headlines', function () {
      list.fetchArticle(function (mockData) {
        expect(mockData.webTitle).toEqual("testArticle");
      });     
    });

  });

  describe('getArticleById', function() {

    it('returns an article mathcing the Id', function () {
      list.fetchArticle(function (mockData) {
        expect(list.getArticleById('sport/live/2017/nov/11/wrnational-live')).toEqual(mockData);
      });
    });

  });

});
