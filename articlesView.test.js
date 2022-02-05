/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');

let model;
let view;
beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  model = new ArticlesModel();
  view = new ArticlesView(model);
});

const articlesData = [
  {data: "First article"},
  {data: "Second article"},
  {data: "Third article"}
];

describe('Articles view', () => {
  it('displays articles on the page', () => {
    model.setArticles(articlesData);

    view.displayArticles();

    expect(document.querySelectorAll('div.article').length).toEqual(3);
  });
});
