/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');

describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  describe('displayNews', () => {
    it('displays news from the model on the page', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add([{id: 'a test news story'}]);
          view.displayNews();
        }
      }
      model.add([{id: 'a test news story'}])
      const view = new NewsView(model, api);
      view.displayNews();
      expect(document.querySelectorAll('div.news-item').length).toEqual(1);
      expect(document.querySelectorAll('div.news-item')[0].innerText).toEqual('a test news story');
    })

    it('displays news from the API on the page', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add([{id: 'a test news story'}, {id: 'some other stuff'}]);
          view.displayNews();
        }
      }
      const view = new NewsView(model, api);
      view.displayNewsFromApi();
      expect(document.querySelectorAll('div.news-item').length).toEqual(2);
      expect(document.querySelectorAll('div.news-item')[0].innerText).toEqual('a test news story');
    })
  })
})