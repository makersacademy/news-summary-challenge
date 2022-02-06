/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const HeadlineView = require('../headlineView');
class HeadlineModel {
  getStories() {
    return [
      { "headline":"Frogs rain down from the skies over Scunthorpe"},
      { "headline":"Pig's seen flying over Billericay" }
    ]
  }
}

describe('Page view', () => {
  describe('#displayStroies', () => {
    it('displays stories from the model', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      view.displayStories();

      const headlines = document.querySelectorAll('.headline');

      expect(headlines.length).toEqual(2);
      expect(headlines[0].innerText).toEqual("Frogs rain down from the skies over Scunthorpe");
      expect(headlines[1].innerText).toEqual("Pig's seen flying over Billericay");
    });
  });
});
