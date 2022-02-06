/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const HeadlineView = require('../headlineView');
class HeadlineModel {
  getStories() {
    return [
      { "headline":"Frogs Rain!", "thumbnail":"frogsImg" },
      { "headline":"Pigs Fly!", "thumbnail":"pigsImg" }
    ]
  }
}

describe('Page view', () => {
  describe('#displayStroies', () => {
    it('displays the headlines', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      view.displayStories();

      const headlines = document.querySelectorAll('.headline');

      expect(headlines.length).toEqual(2);
      expect(headlines[0].innerText).toEqual("Frogs Rain!");
      expect(headlines[1].innerText).toEqual("Pigs Fly!");
    });

    it('displays corresponding images', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      view.displayStories();

      const thumbnails = document.querySelectorAll('.thumbnail');

      expect(thumbnails.length).toEqual(2);
      expect(thumbnails[0].src).toEqual("http://localhost/frogsImg");
      expect(thumbnails[1].src).toEqual("http://localhost/pigsImg");
    });
  });
});
