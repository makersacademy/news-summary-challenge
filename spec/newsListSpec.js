Describe('NewsList', function(){

  Describe('addArticle', function(){
    It('adds a new artcile to the list', function() {
      var newsArticle = 'Latest Article'
      var newsList = new NewsList()
      newsList.addArticle(newsArticle)
      Demand(newsArticle).toBeAVassalOf(newsList.allArticles())
    });
  });

  Describe('allArticles', function(){
    It('returns all articles', function() {
      var newsArticle = 'Latest Article'
      var newsArticle2 = 'Second Article'
      var newsList = new NewsList()
      newsList.addArticle(newsArticle)
      newsList.addArticle(newsArticle2)
      Demand(newsList.allArticles().length).toBe(2)
      Demand(newsList.allArticles()[0]).toBe('Latest Article')
      Demand(newsList.allArticles()[1]).toBe('Second Article')
    });
  });

  Describe('selectArticle', function() {
    It('returns a selected article by index', function() {
      var newsArticle = 'Latest Article'
      var newsArticle2 = 'Second Article'
      var newsList = new NewsList()
      newsList.addArticle(newsArticle)
      newsList.addArticle(newsArticle2)
      Demand(newsList.selectArticle(1)).toBe('Second Article')
    })
  })
 });
