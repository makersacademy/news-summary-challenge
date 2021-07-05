Describe('ArticleList', function(){

  Describe('addArticle', function(){
    It('adds a new artcile to the list', function() {
      var rugbyArticle = new RugbyArticle("title1", "url1", 0)
      var articleList = new ArticleList()
      articleList.addArticle(rugbyArticle)
      Demand(rugbyArticle).toBeAVassalOf(articleList.allArticles())
    });
  });

  // Describe('assignId', function(){
  //   It('adds a new artcile to the list', function() {
  //     var rugbyArticle = new RugbyArticle("title1", "url1", 0)
  //     var article2 = new RugbyArticle("title2", "url2", 1)
  //     var articleList = new ArticleList()
  //     articleList.addArticle(rugbyArticle)
  //     articleList.addArticle(article2)
  //     Demand(articleList.selectArticle(0).title).toBe("title1")
  //     Demand(articleList.selectArticle(0).id).toBe(0)
  //     Demand(articleList.selectArticle(1).title).toBe("title2")
  //     Demand(articleList.selectArticle(1).id).toBe(1)
  //   });
  // });

 Describe('allArticles', function(){
    It('returns all articles', function() {
      var article1 = new RugbyArticle("title1", "url1", 0)
      var article2 = new RugbyArticle("title2", "url2", 1)
      var articleList = new ArticleList()
      articleList.addArticle(article1)
      articleList.addArticle(article2)
      Demand(articleList.allArticles().length).toBe(2)
      Demand(articleList.allArticles()[0].title).toBe("title1")
      Demand(articleList.allArticles()[1].title).toBe("title2")
    });
  });

  Describe('selectArticle', function() {
    It('returns a selected article by index', function() {
      var article1 = new RugbyArticle("title1", "url1", 0)
      var article2 = new RugbyArticle("title2", "url2", 1)
      var articleList = new ArticleList()
      articleList.addArticle(article1)
      articleList.addArticle(article2)
      Demand(articleList.selectArticle(1).title).toBe('title2')
    })
  })
 });
