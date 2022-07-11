/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');


describe('NewsView', () => {
  const testArticle = {
    "webTitle": "Headline 1",
    "webUrl": "http://example.com/",
    "fields": {
      "thumbnail": "http://example.com/img1.jpg"
    }
  }
  it('it displays two articles using displayNews()', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NewsModel();
    const view = new NewsView(model);

    model.setArticle(testArticle);
    model.setArticle(testArticle);

    view.displayArticles();

    expect(document.querySelectorAll('#article').length).toEqual(2);
  });
  it('prevents duplication if displayArticles called multiple times', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NewsModel();
    const view = new NewsView(model);

    model.setArticle(testArticle);
    model.setArticle(testArticle);

    view.displayArticles();
    view.displayArticles();

    expect(document.querySelectorAll('#article').length).toEqual(2);
  });
  it('obtains articles using retrieveArticles', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    
    const mockApi = {
      loadArticles: () => {
        model.setArticle(testArticle);
        view.displayArticles();
      }
    }
    const model = new NewsModel();
    const view = new NewsView(model, mockApi);

    view.retrieveArticles();
    expect(document.querySelectorAll('#article')[0].innerText).toEqual("Headline 1");
  });
});