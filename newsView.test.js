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
    it('displays the news article headlines from model with image, headline and hyperlink', () => {
      const mockModel = new NewsModel();
      const mockApi = new NewsApi();
      const view = new NewsView(mockModel, mockApi);
      view.model.getNews.mockImplementation(() => 
        [{
          webTitle: 'test',
          webUrl: 'http://test.com',
          fields: { thumbnail: 'http://image.com' }
        }]
      )
      view.displayNews();
      expect(document.querySelectorAll('div.news').length).toEqual(1);
      expect(document.querySelectorAll('img.image').length).toEqual(1);
      expect(document.querySelectorAll('a.hyperlink').length).toEqual(1);
    })
  })

  describe('./displayNewsFromApi', () => {
    it('fetches the headlines from Api', () => {
      jest.mock('./newsApi');
      jest.mock('./newsModel');
      const mockModel = new NewsModel();
      const mockApi = new NewsApi();
      const view = new NewsView(mockModel, mockApi);

      view.model.getNews.mockImplementation(() => 
        [{
          webTitle: 'test',
          webUrl: 'http://test.com',
          fields: { thumbnail: 'http://image.com' }
        }]
      );

      view.api.fetchNews.mockImplementation(() => 
        view.displayNews()
      )

      view.displayNewsFromApi();

      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

})