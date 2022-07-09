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
      model.add('a test news story')
      const view = new NewsView(model);
      view.displayNews();
      expect(document.querySelectorAll('div.news-item').length).toEqual(1);
      expect(document.querySelectorAll('div.news-item')[0].innerText).toEqual('a test news story');
    })
  })
})