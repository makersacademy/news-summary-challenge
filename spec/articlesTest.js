function articlesTest() {
  mockArticle = {
    id: 'politics/2018/feb/18/ukip-members-oust-henry-bolton-as-leader-after-five-months', type: 'article', sectionId: 'politics', sectionName: 'Politics', webPublicationDate: '2018-02-18T00:05:29Z', webTitle: 'Ukip members oust Henry Bolton as leader after only five months', webUrl: 'https://www.theguardian.com/politics/2018/feb/18/ukip-members-oust-henry-bolton-as-leader-after-five-months', apiUrl: 'https://content.guardianapis.com/politics/2018/feb/18/ukip-members-oust-henry-bolton-as-leader-after-five-months', isHosted: false, pillarId: 'pillar/news', pillarName: 'News',
  }


  it('should store a headline', function(){
     let article = new Article(mockArticle);
     assert.equals(article.headline, 'Ukip members oust Henry Bolton as leader after only five months')
  })

  it('should store a link', function(){
     let article = new Article(mockArticle);
     assert.equals(article.link, 'https://www.theguardian.com/politics/2018/feb/18/ukip-members-oust-henry-bolton-as-leader-after-five-months')
  })

  it ('should create a new article with class method', function() {
     let article = Article.createArticle(mockArticle)
     assert.isTrue(article instanceof Article);
  })
}
