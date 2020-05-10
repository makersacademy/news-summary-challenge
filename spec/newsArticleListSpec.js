describe('NewsArticleList', function() {
  it('articles is empty when initialised', function() {
    const newsArticleList = new NewsArticleList();
    expect(newsArticleList.articles.length).toEqual(0);
  });

  describe('#addArticle', function() {
    it('creates a news article', function() {
      const newsArticleList = new NewsArticleList();
      const article = setupArticleList(newsArticleList);
      expect(newsArticleList.articles()).toInclude(article);
    });

    it('adds an id to the news article', function() {
      const newsArticleList = new NewsArticleList();
      const article = setupArticleList(newsArticleList);
      expect(article.id).toEqual(0);
    });

    it("article id's are consecutive", function() {
      const newsArticleList = new NewsArticleList();
      const article1 = setupArticleList(newsArticleList);
      const article2 = setupArticleList(newsArticleList);
      const article3 = setupArticleList(newsArticleList);

      expect(article1.id).toEqual(0);
      expect(article2.id).toEqual(1);
      expect(article3.id).toEqual(2);
    });
  });

  describe('#convertToHTML', function() {
    const newsArticleList = new NewsArticleList();
    const article1 = setupArticleList(newsArticleList);
    const article2 = setupArticleList(newsArticleList);
    const article3 = setupArticleList(newsArticleList);

    const htmlString =
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
      '</ul>';

    it('returns view for article list', function() {
      expect(newsArticleList.convertToHTML()).toEqual(htmlString);
    });

    it('returns message if articles are unavailable', function() {
      const emptyNewsArticleList = new NewsArticleList();
      expect(emptyNewsArticleList.convertToHTML()).toEqual(
        '<ul>Unable to show any stories</ul>'
      );
    });
  });

  describe('#fetchHeadlines', function() {
    // SETUP
    const fetchMock = function() {
      return new Promise(function(resolve, reject) {
        resolve(mockApiData);
      });
    };

    const mockApiData = {
      json: () => {
        return new Promise(function(resolve, reject) {
          resolve(apiResponse);
        });
      }
    };

    const mockArticles = [
      { title: 'article 1', url: 'stories/1', urlToImage: 'stories/1.png' },
      { title: 'article 2', url: 'stories/2', urlToImage: 'stories/2.png' },
      { title: 'article 3', url: 'stories/3', urlToImage: 'stories/3.png' }
    ];

    const apiResponse = {
      articles: mockArticles
    };

    it('fetches headlines, adds to list', function() {
      const newsArticleList = new NewsArticleList();
      const originalFetch = window.fetch;
      window.fetch = fetchMock;

      // ACT
      newsArticleList.fetchHeadlines();

      // ASSERT
      setTimeout(() => {
        expect(newsArticleList.articles().length).toEqual(3);
        expect(newsArticleList.articles()[0].headline).toEqual('article 1');
        expect(newsArticleList.articles()[1].headline).toEqual('article 2');
        expect(newsArticleList.articles()[2].headline).toEqual('article 3');
      }, 1100);

      // reset fetch to original
      window.fetch = originalFetch;
    });
  });
});
