/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('../src/NewsModel');
const NewsView = require('../src/NewsView');
const NewsClient = require('../src/NewsClient');
const mockNews = require('../mock/mockNews');
const apiData = require('../mock/mockApiData');
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
  it('should display a single story on page', () => {
    newsModel.getNews = jest.fn().mockReturnValue([mockNews[0]]);

    newsView.displayNews();

    expect(document.querySelectorAll('.news').length).toEqual(1);
  });

  it('should display multiple stories on page', () => {
    newsModel.getNews = jest.fn().mockReturnValue([mockNews[0], mockNews[1]]);

    newsView.displayNews();

    expect(document.querySelectorAll('.news').length).toEqual(2);
  });

  it('should display the expected number of images and links', () => {
    const news = [mockNews[0], mockNews[1]];
    newsModel.getNews = jest.fn().mockReturnValue(news);

    newsView.displayNews();

    const images = document.querySelectorAll('.thumbnail');
    expect(images.length).toBe(2);

    const links = document.querySelectorAll('.news_link');
    expect(links.length).toBe(2);
    for (let i = 0; i < links.length; i++) {
      expect(links[i].getAttribute('href')).toBe(news[i].webUrl);
    }
  });

  it('should add API data to the model', () => {
    const news = [mockNews[0], mockNews[1]];
    newsClient.loadNews.mockImplementation((callback) => {
      callback(apiData);
    });
    newsModel.getNews = jest.fn().mockReturnValue(news);

    newsView.displayNewsFromApi();

    expect(document.querySelectorAll('.news').length).toEqual(2);
    expect(document.querySelectorAll('.news')[0].textContent).toEqual(
      'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live'
    );
  });
});
