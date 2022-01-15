/**
 * @jest-environment jsdom
 */
const ArticlesView = require('../lib/articlesView')
const fs = require('fs');

describe('ArticlesView', () => {
  test('.displayArticles gets list of articles from model', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');

    const ModelMock = { getArticles: () => ['article1','article2']};
    const view = new ArticlesView(ModelMock);

    view.displayHeadlines();

    expect(document.querySelectorAll('h2.article-title').length).toEqual(2);
    expect(document.querySelectorAll('h2.article-title')[0].textContent).toEqual('article1');
    expect(document.querySelectorAll('h2.article-title')[1].textContent).toEqual('article2');
  });

})