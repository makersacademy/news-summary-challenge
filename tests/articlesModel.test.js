const ArticlesModel = require('../lib/articlesModel');

describe('ArticlesModel', () => {
  let model;
  beforeEach(() => {
    model = new ArticlesModel();
  });

  test('initializes with an empty articles array', () => {
    expect(model._articlesArray.length).toEqual(0);
  });

  test('.addArticle adds an article to array', () => {
    const articleMock = {article: 'test'};
    model.addArticle(articleMock);
    expect(model._articlesArray.length).toEqual(1);
    expect(model._articlesArray[0]).toEqual(articleMock);
  });

  test('.getArticles returns array with all articles', () => {
    const articleMock1 = {article: 'test1'};
    const articleMock2 = {article: 'test2'};
    model.addArticle(articleMock1);
    model.addArticle(articleMock2);
    expect(model.getArticles().length).toEqual(2);
    expect(model.getArticles()).toEqual([{article: 'test1'}, {article: 'test2'}]);
  });
});
