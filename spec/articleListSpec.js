var articleListModule = require('../src/articleList.js')

describe('ArticleList', function() {
  var articleList;

  beforeEach(function(){
    articleList = new articleListModule.ArticleList();
  });

  describe('#articles', function(){
    it('has an empty array', function(){
        expect(articleList.articles()).toBeEmpty();
    })
  })

});
