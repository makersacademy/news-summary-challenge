const NewsModel = require('./newsModel');

describe('NotesModel', () => {
  it('returns empty array', () => {
    const model = new NewsModel();

    expect(model.getNews()).toEqual(null);
  })

  it('adds news', () => {
    const model = new NewsModel();

    model.addNews({ response: {
      results:  'Here is some news from the API'
    }});

    expect(model.getNews()).toEqual('Here is some news from the API');
  })

})