const NewsModel = require('./newsModel');

describe('NotesModel', () => {
  it('returns empty array', () => {
    const model = new NewsModel();

    expect(model.getNews()).toEqual([]);
  })

  it('adds news', () => {
    const model = new NewsModel();

    model.addNews({ response: 'Here is some news form the API'} );

    expect(model.getNews().response).toEqual('Here is some news form the API');
  })

})