const HeadlineModel = require('../headlineModel')

describe('Headline Model', () => {
  it('begins with an empty array', () => {
    const model = new HeadlineModel();

    expect(model.getStories()).toEqual([]);
  });

  describe('#addStory', () => {
    it('adds a story object', () => {
      const model = new HeadlineModel();
      model.addStory({ "headline":"Frogs rain down from the skies over Scunthorpe" })

      expect(model.getStories()[0]["headline"]).toEqual("Frogs rain down from the skies over Scunthorpe");
    });
  });
});
