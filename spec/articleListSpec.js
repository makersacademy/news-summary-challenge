(function (exports) {
  let articleList
  let article = new Article('Storm Ciara to bring severe gales to UK', 'https://www.bbc.co.uk/news/uk-51425482', 'body', 'summary', 'randomId999')

  function addArticleToList () {
    console.log('addArticleToList')
    articleList = new ArticleList
    expect(articleList.add(article)).toEqual(1) 
  }

  function returnArticleList () {
    console.log('returnArticleList')
    articleList = new ArticleList
    articleList.add(article)
    expect(articleList.list).toInclude(article)
  }

  function findArticle () {
    console.log('findArticle')
    articleList = new ArticleList
    articleList.add(article)
    expect(articleList.find('randomId999')).toEqual(article)
  }
  
  addArticleToList()
  returnArticleList()
  findArticle()
})(this)