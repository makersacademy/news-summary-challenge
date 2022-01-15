/**
 * @jest-environment jsdom
 */
const ArticlesView = require('../lib/articlesView')
const fs = require('fs');

describe('ArticlesView', () => {
  test('.displayArticles gets list of articles from model', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');

    const ModelMock = { getArticles: () => [
      { webTitle: 'article1',
        fields: {thumbnail: 'ex'} },
      { webTitle: 'article2',
        fields: {thumbnail: 'ex'} }
      ]}

    const view = new ArticlesView(ModelMock);

    view.displayHeadlines();

    expect(document.querySelectorAll('h2.article-title').length).toEqual(2);
    expect(document.querySelectorAll('h2.article-title')[0].textContent).toEqual('article1');
    expect(document.querySelectorAll('h2.article-title')[1].textContent).toEqual('article2');
  });

  test('.displayArticles clears previously displayed to avoid duplicating', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');

    const ModelMock = { getArticles: () => [
      { webTitle: 'article1',
        fields: {thumbnail: 'ex'} },
      { webTitle: 'article2',
        fields: {thumbnail: 'ex'} }
      ]}

    const view = new ArticlesView(ModelMock);

    view.displayHeadlines();
    view.displayHeadlines();
    view.displayHeadlines();

    expect(document.querySelectorAll('h2.article-title').length).toEqual(2);
  });

})