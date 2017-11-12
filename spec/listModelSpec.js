'use strict';

describe('list model', function () {

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
          response: {
            content: {
              id: "sport/live/2017/nov/11/wrnational-live",
              webTitle: "testArticle",
              webUrl: "httpve",
            }
          }
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
      })
      
    });

  });

});
