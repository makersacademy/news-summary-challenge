/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ArticlesView = require('../articlesView');
const ArticlesModel = require('../articlesModel');

describe('ArticlesView', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  const model = new ArticlesModel();
  const view = new ArticlesView(model);

  it('displays two articles', () => {
    model.addArticle('an article');
    model.addArticle('another article');

    view.displayArticles();

    expect(document.querySelectorAll('div.article').length).toBe(2);
  });
});
