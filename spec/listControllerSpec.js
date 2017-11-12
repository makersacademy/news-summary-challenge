'use strict';

describe('list controller', function () {

  var listController;

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
    listModel.fetchArticles();
    
    listController = new ListController({
      containerId: 'test',
      ListView: ListView,
      listModel: listModel
    });

  });

  describe('renderListItem', function () {

    it('renders a list item on the page', function () {
      listController.showListItem();
      var container = document.getElementById('test');
      expect(container.innerHTML).toInclude('testArticle');
    });

  });

});
