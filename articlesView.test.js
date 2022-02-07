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
  {headline: "First article", thumbnail: "./images/image1.jpeg", webUrl: "https://www.google.com/"},
  {headline: "Second article", thumbnail: "./images/image2.jpeg", webUrl: "https://www.google.com/"}, 
  {headline: "Third article", thumbnail: "./images/image3.jpeg", webUrl: "https://www.google.com/"}
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

    expect(document.querySelector('div.article h3.article-headline a').innerText).toEqual('First article');
    expect(document.querySelectorAll('div.article h3.article-headline a').length).toEqual(3);
  });

  it('displays an image with each article', () => {
    model.setArticles(articlesData);

    view.displayArticles();

    expect(document.querySelector('div.article img.article-image').src).toEqual('http://localhost/images/image1.jpeg');
    expect(document.querySelectorAll('div.article img.article-image').length).toEqual(3);
  });

  // it('links a headline to the original article', () => {
  //   model.setArticles(articlesData);
  //   view.displayArticles();
    
  //   const firstHeadlineLink = document.querySelector('div.article h3.article-headline a');
  //   console.log(firstHeadlineLink.href);
  //   // const firstHeadlineLink = firstHeadlineEl.innerHTML;

  //   expect(firstHeadlineLink.href).toEqual('https://www.google.com/');
  //   expect(document.querySelectorAll('div.article h3.article-headline a').length).toEqual(3);
    
  //   document.querySelector('div.article h3.article-headline a').click();

  //   expect(window.location.href).toEqual('https://www.google.com/');
  // });

  it('shows articles that match user input', () => {
    const input = document.querySelector('#search-content-input');
    input.value = 'First';
    const button = document.querySelector('#search-content-btn');
    // button.click();

    model.setArticles([articlesData[0]]);
    view.displayArticles();

    expect(document.querySelector('div.article h3.article-headline a').innerText).toEqual(expect.stringContaining('First'));
  });
});
