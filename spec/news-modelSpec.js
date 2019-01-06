var NewsModule = require('../src/news-model.js');

console.log(NewsModule)

describe('News', function() {

  var aNews;

  beforeEach(function() {
    aNews = new NewsModule.News("a","a","a","a","a");
  });

  it('id number ++', function() {
    expect(aNews.id).toEqual(1)
  });


});