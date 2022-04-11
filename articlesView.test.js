/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ArticlesView = require('./articlesView');

let articles = [
  {
    fields: {
      headline: "First article",
      thumbnail: "./images/image1.jpeg",
    },
    webUrl: "https://www.google.com/",
  },
  {
    fields: {
      headline: "Second article",
      thumbnail: "./images/image2.jpeg",
    },
    webUrl: "https://www.google.com/",
  },
  {
    fields: {
      headline: "Third article",
      thumbnail: "./images/image3.jpeg",
    },
    webUrl: "https://www.google.com/",
  },
];

let model = {
  getArticles: () => articles,
  reset: () => null,
}

let api = {
  loadArticles: () => null,
}

let view;
beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  view = new ArticlesView(model, api);
  view.displayArticles();
});

describe('Articles view', () => {
  it('displays articles on the page', () => {
    expect(document.querySelectorAll('div.article').length).toEqual(3);
  });

  it('displays articles with headlines on the page', () => {
    expect(document.querySelector('div.article a h3.article-headline').innerText).toEqual('First article');
    expect(document.querySelectorAll('div.article a h3.article-headline').length).toEqual(3);
  });

  it('displays an image with each article', () => {
    expect(document.querySelector('div.article a img.article-image').src).toEqual('http://localhost/images/image1.jpeg');
    expect(document.querySelectorAll('div.article a img.article-image').length).toEqual(3);
  });

  it('links a headline to the original article', () => {    
    const firstHeadlineLink = document.querySelector('div.article a');
    // console.log(firstHeadlineLink.href);

    expect(firstHeadlineLink.href).toEqual('https://www.google.com/');
    expect(document.querySelectorAll('div.article a h3.article-headline').length).toEqual(3);
  });

  it('shows articles that match user input', () => {
    const input = document.querySelector('#search-content-input');
    input.value = 'Sport';
    const button = document.querySelector('#search-content-btn');
    button.click();

    articles = [
      {
        fields: {
          headline: "Sport",
          thumbnail: "./images/image1.jpeg",
        },
        webUrl: "https://www.google.com/",
      },
    ];

    model = {
      getArticles: () => articles,
    }

    view = new ArticlesView(model, api);

    view.displayArticles();

    expect(document.querySelector('div.article a h3.article-headline').innerText).toEqual(expect.stringContaining('Sport'));
  });
});
