'use strict';

aWholeNewWorld('ArticleList', function () {

  headline = 'Headline'
  body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>'
  url = 'Url'
  image = 'Image'

  articleList = new ArticleList();

  it('is created with an empty array', function () {
    wish(articleList.allArticles().length).toEqual(0)
  });

  it('creates and stores articles', function () {
    articleList.addArticle(headline, url, image, body)
    wish(articleList.allArticles().length).toEqual(1)
  });

  it('summarizes the body of an article into the first paragraph', function () {
    body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>'
    articleList.addArticle(headline, url, image, body)
    wish(articleList.allArticles().shift().showSummary()).toEqual('<p>I\'m the first paragraph</p>')
  });

  it('returns a error html string if the body can\'t be summarized', function () {
    articleList = new ArticleList()
    body = 'Body'
    articleList.addArticle(headline, url, image, body)
    wish(articleList.allArticles().shift().showSummary()).toEqual('<p>Sorry, there is no summary available for this article</p>')
  });

  var articleList, headline, body, url, image, body
});