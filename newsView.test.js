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
    document.body.innerHTML = fs.readFileSync('./index.html');
    NewsModel.mockClear();
    NewsApi.mockClear();
  })

  describe('./displayNews', () => {
    it('displays the news article headlines from model', () => {
      const mockModel = new NewsModel();
      const mockApi = new NewsApi();
      const view = new NewsView(mockModel, mockApi);
      view.model.getNews.mockImplementation(() => {
        [{
          webTitle: 'test',
          webUrl: 'http://test.com',
          fields: { thumbnail: 'http://image.com' }
        }]
      })
      view.displayNews();
      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

  describe('./displayNewsFromApi', () => {
    it('fetches the headlines from Api', () => {
      const mockModel = new NewsModel();
      const mockApi = new NewsApi();
      const view = new NewsView(mockModel, mockApi);

      view.model.getNews.mockImplementation(() => {
        [{
          webTitle: 'test',
          webUrl: 'http://test.com',
          fields: { thumbnail: 'http://image.com' }
        }]
      });

      view.model.setNews.mockImplementation();

      view.api.fetchNews.mockImplementation((callback) => {
        callback([{
          webTitle: 'test',
          webUrl: 'http://test.com',
          fields: { thumbnail: 'http://image.com' }
        }])
      })

      view.displayNewsFromApi();

      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

})