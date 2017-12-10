var ArticleListModule = require('../src/ArticleList.js');
var ArticleList = ArticleListModule.ArticleList;

describe('Article list object',function(){
  var articlelist;

  beforeEach(function(){
    articlelist = new ArticleList();
  });

  describe('has list', function(){
    it('is an empty array', function(){
      expect(articlelist.list).toBeEmpty()
    })
  })

});
