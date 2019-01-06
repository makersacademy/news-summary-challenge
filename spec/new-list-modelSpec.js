var NewsListModule = require('../src/news-list-model.js');

describe('NewsList', function() {

  var aNews;

  beforeEach(function() {
    aNews = new NewsModule.NewsList("a","a","a","a","a");
  });

  it('some test', function() {
    expect(aNews.id).toEqual(1)
  });


});