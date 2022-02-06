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
  {headline: "First article", thumbnail: "image1"},
  {headline: "Second article", thumbnail: "image 2"},
  {headline: "Third article", thumbnail: "image 3"}
];

describe('Articles view', () => {
  it('displays articles on the page', () => {
    model.setArticles(articlesData);

    view.displayArticles();

    expect(document.querySelectorAll('div.article').length).toEqual(3);
  });

  it('displays articles with headlines on the page', () => {
    model.setArticles(articlesData);

    view.displayArticles();

    expect(document.querySelectorAll('div.article h3.article-headline').length).toEqual(3);
  });

  it('displays an image with each article', () => {
    model.setArticles(articlesData);

    view.displayArticles();

    expect(document.querySelectorAll('div.article img.article-image').length).toEqual(3);
  });
});
