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

    view.displayArticles();

    expect(document.querySelectorAll('div.article').length).toEqual(2);
    expect(document.querySelectorAll('div.article')[0].textContent).toEqual('article1');
    expect(document.querySelectorAll('div.article')[1].textContent).toEqual('article2');
  });

})