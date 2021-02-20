'use strict';

it('creates an empty list of articles on instantiation', function() {
  let articleList = new ArticleList();
  expect(articleList.getArticles()).toEqual([])
});

it('adds an article to the article list', function() {
  let articleList = new ArticleList();
  articleList.addArticle('test article')
  expect(articleList.getArticles).toEqual(['test article'])
});
