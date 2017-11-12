'use strict';

describe('newsController', function () {

  var newsController;

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
                id: "sport/live/2017/nov/11/wrnational-live",
                webTitle: "testArticle",
                webUrl: "httpve",
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
              fields: { thumbnail: 'http://lorempixel.com/500/300' }
            }
          }
        });
      }
    }
  };

  beforeEach(function () {

    var listModel = new ListModel(mockAPI);
    
    newsController = new NewsController({
      containerId: 'test',
      ListView: ListView,
      listModel: listModel
    });

  });

  describe('renderRow', function () {

    it('renders a row of list items on the page', function () {
      newsController.renderRow();
      var container = document.getElementById('test');
      expect(container.innerHTML).toInclude('testArticle');
    });

  });

});
