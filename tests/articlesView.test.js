/**
 * @jest-environment jsdom
 */
const ArticlesView = require('../lib/articlesView');
const fs = require('fs');

describe('ArticlesView', () => {
  test('.displayHeadlines displays articles from model', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');

    const ModelMock = {getArticles: () => [
      {webTitle: 'article1',
        fields: {thumbnail: 'ex'},
        id: 'test'},
      {webTitle: 'article2',
        id: 'test',
        fields: {thumbnail: 'ex'}},
    ]};

    const view = new ArticlesView(ModelMock);

    view.displayHeadlines();

    expect(document.querySelectorAll('.article').length).toEqual(2);
    expect(document.querySelectorAll('.article > h2')[0].textContent).toEqual('article1');
    expect(document.querySelectorAll('.article > h2')[1].textContent).toEqual('article2');
  });

  test('.displayHeadlines creates a div for each article with title,img,and summary button', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');

    const ModelMock = {getArticles: () => [
      {webTitle: 'article1',
        fields: {thumbnail: 'ex'},
        id: 'ex'},
    ]};

    const view = new ArticlesView(ModelMock);

    view.displayHeadlines();

    expect(document.querySelectorAll('.article > h2')[0].textContent).toEqual('article1');
    expect(document.querySelectorAll('.article > img')[0].src).toEqual('http://localhost/ex');
    expect(document.querySelectorAll('.article > a')[0].innerHTML).toEqual('<button>Summary</button>');
  });

  test('.displayHeadlines clears previously displayed to avoid duplicating', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');

    const ModelMock = {getArticles: () => [
      {webTitle: 'article1',
        fields: {thumbnail: 'ex'},
        id: 'ex'},
      {webTitle: 'article2',
        id: 'ex',
        fields: {thumbnail: 'ex'}},
    ]};

    const view = new ArticlesView(ModelMock);

    view.displayHeadlines();
    view.displayHeadlines();
    view.displayHeadlines();

    expect(document.querySelectorAll('.article').length).toEqual(2);
  });

  test('.displaySingleArticle displays single article', () => {
    document.body.innerHTML = fs.readFileSync('./views/index.html');
    const view = new ArticlesView();

    const articleMock = {
      webTitle: 'article1',
      fields: {thumbnail: 'ex'},
    };

    view.displaySingleArticle(articleMock);

    expect(document.querySelectorAll('.article').length).toEqual(1);
    expect(document.querySelectorAll('.article > h2')[0].textContent).toEqual('article1');
    expect(document.querySelectorAll('.article > p')[0].textContent).toEqual('Summary placeholder');
    expect(document.querySelectorAll('.article > img')[0].src).toEqual('http://localhost/ex');
  });
});
