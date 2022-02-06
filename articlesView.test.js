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
  {headline: "First article", thumbnail: "./images/image1.jpeg"},
  {headline: "Second article", thumbnail: "./images/image2.jpeg"},
  {headline: "Third article", thumbnail: "./images/image3.jpeg"}
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

    expect(document.querySelector('div.article h3.article-headline').innerText).toEqual('First article');
    expect(document.querySelectorAll('div.article h3.article-headline').length).toEqual(3);
  });

  it('displays an image with each article', () => {
    model.setArticles(articlesData);

    view.displayArticles();

    expect(document.querySelector('div.article img.article-image').src).toEqual('http://localhost/images/image1.jpeg');
    expect(document.querySelectorAll('div.article img.article-image').length).toEqual(3);
  });
});
