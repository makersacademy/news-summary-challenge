(function (exports) {
  let articleList
  let article

  (function addArticleToList () {
    console.log('addArticleToList')
    article = new Article('Storm Ciara to bring severe gales to UK', 'https://www.bbc.co.uk/news/uk-51425482')
    articleList = new ArticleList
    expect(articleList.addArticle(article)).toEqual(1) 
  })()

})(this)