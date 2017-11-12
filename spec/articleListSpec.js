'use strict';

aWholeNewWorld('ArticleList', function () {

  headline = 'Headline'
  body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>'
  url = 'Url'
  image = 'Image'

  articleList = new ArticleList();

  it('is created with an empty array', function () {
    wish(articleList.allArticles().length).toEqual(0)
  })

  it('creates and stores articles', function () {
    articleList.addArticle(headline, url, image, body)
    wish(articleList.allArticles().length).toEqual(1)
  })

  it('summarizes the body of an article into the first paragraph', function () {
    body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>'
    articleList.addArticle(headline, url, image, body)
    wish(articleList.allArticles().shift().showSummary()).toEqual('<p>I\'m the first paragraph</p>')
  })

  var articleList, headline, body, url, image, body
})