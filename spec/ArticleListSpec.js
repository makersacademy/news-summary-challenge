var ArticleListModule = require('../src/ArticleList.js');
var ArticleList = ArticleListModule.ArticleList;

describe('Article list object',function(){
  var articlelist;
  var article;

  beforeEach(function(){
    articlelist = new ArticleList();
    article = 'Fake Article'
  });

  describe('has list', function(){
    it('is an empty array', function(){
      expect(articlelist.list).toBeEmpty()
    })
  })

  describe('#addArticle', function(){
    it('populates list with article', function(){
      articlelist.addArticle(article);
      expect(articlelist.list).toContain('Fake Article')
    })
  })

});
