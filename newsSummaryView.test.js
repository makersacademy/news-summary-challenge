/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsSummaryModel = require('./newsSummaryModel');
const NewsSummaryView = require('./newsSummaryView');

let newsModel;
let newsView;
let fakeApi;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  fakeApi = { getHeadlines: (callback) => callback(
    [ 
      { 
        webTitle: 'Your news today', 
        webUrl: 'https://examplewebsite.com', 
        fields: {
          thumbnail: 'https://image.jpg'
        } 
      } 
    ])
  };

  newsModel = new NewsSummaryModel();
  newsView = new NewsSummaryView(newsModel, fakeApi);
})

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

  // it('returns the headline based on the user search query', () => {
  //   const fakeNews = [{
  //     webTitle: 'Your news today', 
  //     webUrl: 'https://examplewebsite.com', 
  //     fields: {
  //       thumbnail: 'https://image.jpg'
  //     } 
  //   }];

  //   const fakeApi2 = { searchHeadlines: (search, callback) => {
  //     callback(fakeNews)}
  //   }

  //   const newsView2 = new NewsSummaryView(newsModel, fakeApi2);

  //   const inputEl = document.querySelector("#search-input");
  //   const buttonEl = document.querySelector("#search-button");

  //   newsView2.displayNews();

  //   inputEl.value = 'today';
  //   buttonEl.click();

  //   expect(document.querySelectorAll('a.headline-link').length).toEqual(1);
  //   expect(document.querySelector('a.headline-link').href).toBe('https://examplewebsite.com/');
  // });
});