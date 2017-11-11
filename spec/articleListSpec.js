'use strict';

aWholeNewWorld('ArticleList', function () {

  headline = 'Headline'
  summary = 'Summary'
  url = 'url'
  image = 'image'

  articleList = new ArticleList();

  it('is created with an empty array', function () {
    wish(articleList.allArticles().length).toEqual(0)
  })

  it('creates and stores articles', function () {
    articleList.addArticle(headline, url)
    wish(articleList.allArticles().length).toEqual(1)
  })

  var articleList, headline, summary, url, image
})