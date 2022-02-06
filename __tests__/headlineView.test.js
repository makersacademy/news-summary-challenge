/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const HeadlineView = require('../headlineView');
const HeadlineModel = require('../headlineModel');

describe('Page view', () => {
  it('has one main container', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new HeadlineView();

    expect(document.querySelectorAll('#main-container').length).toBe(1);
  });

  describe('#displayStroies', () => {
    it('displays stories from the model', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      model.addStory({ "headline":"Frogs rain down from the skies over Scunthorpe"});
      model.addStory({ "headline":"Pig's seen flying over Billericay" });

      view.displayStories();

      const headlines = document.querySelectorAll('.headline');

      expect(headlines.length).toEqual(2);
      expect(headlines[0].innerText).toEqual("Frogs rain down from the skies over Scunthorpe");
      expect(headlines[1].innerText).toEqual("Pig's seen flying over Billericay");
    });
  });
});
