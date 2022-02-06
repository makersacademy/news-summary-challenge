const HeadlineModel = require('../headlineModel')

describe('Headline Model', () => {
  it('begins with an empty array', () => {
    const model = new HeadlineModel();

    expect(model.getStories()).toEqual([]);
  });

  describe('#setStories', () => {
    it('adds story objects to the array', () => {
      const model = new HeadlineModel();
      model.setStories(
        { "response":{ "results":[
          { "fields":{ "headline":"Hello1"}},
          { "fields":{ "headline":"Hello2"}},
          { "fields":{ "headline":"Hello3"}}
        ]}}
      );

      expect(model.getStories()[0]["headline"]).toEqual('Hello1')
      expect(model.getStories()[1]['headline']).toEqual('Hello2')
      expect(model.getStories()[2]['headline']).toEqual('Hello3')
    });
  });
});
