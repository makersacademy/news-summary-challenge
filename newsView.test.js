/**
 * @jest-environment jsdom
 */

const NewsModel = require('./newsModel.js');
const NewsView = require('./newsView.js');

const fs = require('fs');

describe('NewsView', () => {
  it('displays articles', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // setting up model and view
    const model = new NewsModel();
    const view = new NewsView(model);

    // adding articles
    model.addArticle('a new article');
    model.addArticle('a new article');

    // displaying view

    view.displayArticles();

    expect(document.querySelectorAll('div.article').length).toEqual(2);
  });
});
