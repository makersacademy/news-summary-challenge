/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('../src/NewsModel');
const NewsView = require('../src/NewsView');
const NewsClient = require('../src/NewsClient');

jest.mock('../src/NewsClient.js');

describe(NewsView, () => {
  let newsModel, newsView, newsClient;
  beforeEach(() => {
    NewsClient.mockClear();

    document.body.innerHTML = fs.readFileSync('./index.html');

    newsClient = new NewsClient();
    newsModel = new NewsModel();
    newsView = new NewsView(newsModel, newsClient);
  });

  it('should display no news if empty', () => {
    newsView.displayNews();

    expect(document.querySelectorAll('.news').length).toBe(0);
  });
});
