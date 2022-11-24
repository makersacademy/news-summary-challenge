/**
 * @jest-environment jsdom
 */

const fs = require('fs');
require('jest-fetch-mock').enableMocks();
const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');

describe('News View', () => {
  let model;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsModel();
    view = new NewsView(model);
  });

  it('constructs with an empty list of articles', () => {
    view.displayArticles();
    expect(document.querySelectorAll('div.article').length).toEqual(0);
  });

  it('displays list of articles added', () => {
    model.addArticle("General election called");
    model.addArticle("Climate challenge is serious");
    view.displayArticles();
    expect(document.querySelectorAll('div.article').length).toEqual(2);
  });

  it('displays list of articles correctly when displayArticles is caleld twice', () => {
    model.addArticle("Test article");
    view.displayArticles();
    view.displayArticles();
    expect(document.querySelectorAll('div.article').length).toEqual(1);
  });

  it('calls articles from API and displays them', () => {
    const clientMock = {
      loadArticles: (callback) => {
        callback(['This is an article from the API', 'This is another article from the API'])
      }
    }

    const view = new NewsView(model, clientMock);
    view.displayArticlesFromApi();
    expect(document.querySelectorAll('div.article').length).toEqual(2);
  })

});