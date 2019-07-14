describe('NewsArticleList', function() {
  it('articles is empty when initialised', function() {
    var newsArticleList = new NewsArticleList();
    expect(newsArticleList.articles.length).toEqual(0);
  });

  describe('#addArticle', function() {  
    it('creates a news article', function() {   
      let newsArticleList = new NewsArticleList();  
      let article = setupArticleList(newsArticleList);        
      expect(newsArticleList.articles()).toInclude(article);
    });

    it('adds an id to the news article', function() {
      let newsArticleList = new NewsArticleList();
      let article = setupArticleList(newsArticleList);  
      expect(article.id).toEqual(0);
    });

    it('article id\'s are consecutive', function() {
      let newsArticleList = new NewsArticleList();  
      let article1 =  setupArticleList(newsArticleList);
      let article2 =  setupArticleList(newsArticleList);
      let article3 =  setupArticleList(newsArticleList);

      expect(article1.id).toEqual(0);
      expect(article2.id).toEqual(1);
      expect(article3.id).toEqual(2);
    });
  });

  describe('#convertToHTML', function() {
    let newsArticleList = new NewsArticleList();
    let article1 = setupArticleList(newsArticleList);
    let article2 = setupArticleList(newsArticleList);
    let article3 = setupArticleList(newsArticleList);

    let htmlString = 
    '<ul>' + 
      `<li id="${article1.id}"><a href="#articles/${article1.id}">` +
      `<h3>${article1.headline}</h3>` +
      '</a></li>' +
      `<li id="${article2.id}"><a href="#articles/${article2.id}">` +
      `<h3>${article2.headline}</h3>` +
      '</a></li>' +
      `<li id="${article3.id}"><a href="#articles/${article3.id}">` +
      `<h3>${article3.headline}</h3>` +
      '</a></li>' +
    '</ul>'

    it('returns view for article list', function() {
      expect(newsArticleList.convertToHTML()).toEqual(htmlString);
    });

    it('returns message if articles are unavailable', function() {
      let newsArticleList = new NewsArticleList();
      expect(newsArticleList.convertToHTML()).toEqual("<ul>Unable to show any stories</ul>");
    });
  });
})
