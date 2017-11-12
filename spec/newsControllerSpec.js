'use strict';

describe('newsController', function () {

  var newsController;

  var mockData = {
    content: {
      id: "sport/live/2017/nov/11/wrnational-live",
      webTitle: "testArticle",
      webUrl: "httpve",
      fields: { thumbnail: 'http://lorempixel.com/500/300' }
    }
  }

  var mockResult = {
    id: "sport/live/2017/nov/11/wrnational-live",
    webTitle: "testArticle",
    webUrl: "httpve",
  }

  var mockAPI = {
    search: function (params, callback, id = '') {
      if (id === '') {
        callback({
          response: {
            results: [mockResult, mockResult, mockResult]
          }
        })
      } else {
        callback({ response: mockData });
      }
    }
  };

  var mockAlyienAPI = {
    search: function (articleURL, callback) {
      callback({ sentences: ["sentence 1", "sentence 2"] });
    }
  };

  beforeEach(function () {

    var listModel = new ListModel(mockAPI);
    var summaryModel = new SummaryModel(mockAlyienAPI);
    
    newsController = new NewsController({
      containerId: 'test',
      listModel: listModel,
      summaryModel: summaryModel
    });

  });

  afterEach(function () {
    var container = document.getElementById('test');
    container.innerHTML = '';
  });

  describe('renderSummary', function () {
    
    it('renders the summary for a specific news article', function () {
      newsController.renderRow();
      newsController.renderSummary("sport/live/2017/nov/11/wrnational-live");
      var container = document.getElementById('test');
      expect(container.innerHTML).toInclude('sentence 2');
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
