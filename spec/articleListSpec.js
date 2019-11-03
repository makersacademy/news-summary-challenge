Describe('ArticleList', function(){

  Describe('addArticle', function(){
    It('adds a new artcile to the list', function() {
      var rugbyArticle = 'Latest Article'
      var articleList = new ArticleList()
      articleList.addArticle(rugbyArticle)
      Demand(rugbyArticle).toBeAVassalOf(articleList.allArticles())
    });
  });

  Describe('allArticles', function(){
    It('returns all articles', function() {
      var article = 'Latest Article'
      var article2 = 'Second Article'
      var articleList = new ArticleList()
      articleList.addArticle(article)
      articleList.addArticle(article2)
      Demand(articleList.allArticles().length).toBe(2)
      Demand(articleList.allArticles()[0]).toBe('Latest Article')
      Demand(articleList.allArticles()[1]).toBe('Second Article')
    });
  });

  Describe('selectArticle', function() {
    It('returns a selected article by index', function() {
      var article = 'Latest Article'
      var article2 = 'Second Article'
      var articleList = new ArticleList()
      articleList.addArticle(article)
      articleList.addArticle(article2)
      Demand(articleList.selectArticle(1)).toBe('Second Article')
    })
  })
 });
