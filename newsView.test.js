/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

jest.mock('./newsModel');

describe('NewsView', () => {
  beforeEach(() => {
    NewsModel.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  let mockModel = new NewsModel();

  describe('./displayNews', () => {
    it('displays the news article headlines', () => {
      const view = new NewsView(mockModel);
      mockModel.getNews.mockImplementation(() => ['This is a news article'])
      view.displayNews();
      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

})