/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('./newsModel');
const NewsApi = require('./newsApi');
const NewsView = require('./newsView');

jest.mock('./newsModel');
jest.mock('./newsApi');

describe('NewsView', () => {
  beforeEach(() => {
    NewsModel.mockClear();
    NewsApi.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  let mockModel = new NewsModel();
  let mockApi = new NewsApi();

  describe('./displayNews', () => {
    it('displays the news article headlines', () => {
      const view = new NewsView(mockModel, mockApi);
      mockModel.getNews.mockImplementation(() => ['This is a news article'])
      view.displayNews();
      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

  describe('./displayNewsFromApi', () => {
    it('fetches the headlines from Api', () => {
      const view = new NewsView(mockModel, mockApi);

      mockApi.fetchNews.mockImplementation((callback) => {
        callback(['This is a news article'])
      })

      view.displayNewsFromApi();

      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

})