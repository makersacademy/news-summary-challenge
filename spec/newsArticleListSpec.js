describe('NewsArticleList', function() {
  it('articles is empty when initialised', function() {
    var newsArticleList = new NewsArticleList();
    expect(newsArticleList.articles.length).toEqual(0);
  });

  describe('#addArticle', function() {
    it('creates a news article', function() {
      let newsArticleList = new NewsArticleList();
      let headline = 'Novak Djokovic v Roger Federer – live!';
      let imageUrl = 'http://www.example.com/example.jpg';
      let url = 'http://www.example.com';      
      let article = newsArticleList.addArticle(headline, url, imageUrl);
     
      expect(newsArticleList.articles()).toInclude(article);
    });

    it('adds an id to the news article', function() {
      let newsArticleList = new NewsArticleList();
      let headline = 'Novak Djokovic v Roger Federer – live!';
      let imageUrl = 'http://www.example.com/example.jpg';
      let url = 'http://www.example.com';
      let article = newsArticleList.addArticle(headline, url, imageUrl);

      expect(article.id).toEqual(0);
    });

    it('adds consecutive id\'s to articles', function() {
      let newsArticleList = new NewsArticleList();
      let headline = 'Novak Djokovic v Roger Federer – live!';
      let imageUrl = 'http://www.example.com/example.jpg';
      let url = 'http://www.example.com';
      let article1 = newsArticleList.addArticle(headline, url, imageUrl);
      let article2 = newsArticleList.addArticle(headline, url, imageUrl);
      let article3 = newsArticleList.addArticle(headline, url, imageUrl);

      expect(article1.id).toEqual(0);
      expect(article2.id).toEqual(1);
      expect(article3.id).toEqual(2);
    });
  });

  describe('#', function() {

  });
})