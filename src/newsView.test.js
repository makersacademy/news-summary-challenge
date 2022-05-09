
const fs = require('fs');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

let newsModel;
let newsView;
let fakeApi;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  fakeApi = { getHeadlines: (callback) => callback(
    [{
        webTitle: 'Your news today',
        webUrl: 'https://examplewebsite.com',
        fields: {
          thumbnail: 'https://image.jpg'
        } 
      }]
    )
  };

  newsModel = new NewsModel();
  newsView = new NewsView(newsModel, fakeApi);
});

describe('News summary', () => {
  it('displays the news headlines', () => {
    newsView.displayNews();

    expect(document.querySelectorAll('div.headline').length).toEqual(1);
  });

  it('displays the news headlines with clickable links', () => {
    newsView.displayNews();

    expect(document.querySelectorAll('a.headline-link').length).toEqual(1);
    expect(document.querySelector('a.headline-link').href).toBe('https://examplewebsite.com/');
  });

  it('displays the image for each news', () => {
    newsView.displayNews();

    expect(document.querySelectorAll('a.headline-link').length).toEqual(1);
    expect(document.querySelector('img.headline-img').src).toBe('https://image.jpg/');
  });
});