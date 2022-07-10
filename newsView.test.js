/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
const fakeJson = require('./fakeJson.json')

describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  describe('displayNews', () => {
    it('displays news from the API on the page', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add(fakeJson.response.results);
          view.displayNews();
        }
      }
      const view = new NewsView(model, api);
      view.displayNewsFromApi();
      expect(document.querySelectorAll('div.news-title').length).toEqual(10);
      expect(document.querySelectorAll('div.news-title')[0].innerText).toEqual("Spain v Finland: Women’s Euro 2022 – live!");
    })
  })
})