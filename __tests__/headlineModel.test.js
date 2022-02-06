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
          { "webUrl":"pig", "fields":{ 
            "headline":"Pigs Fly!",
            "thumbnail":"pigsImg"
          }},
          { "webUrl":"frog", "fields":{ 
            "headline":"Frogs Rain!",
            "thumbnail":"frogsImg"
          }}
        ]}}
      );
      
      expect(model.getStories().length).toEqual(2)
      
      expect(model.getStories()[0]["headline"]).toEqual('Pigs Fly!')
      expect(model.getStories()[0]["thumbnail"]).toEqual('pigsImg')
      expect(model.getStories()[0]["url"]).toEqual('pig')

      expect(model.getStories()[1]['headline']).toEqual('Frogs Rain!')
      expect(model.getStories()[1]["thumbnail"]).toEqual('frogsImg')
      expect(model.getStories()[1]["url"]).toEqual('frog')
    });
  });
});
