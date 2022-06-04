const NewsModel = require('../models/newsModel');

describe('NewsModel', () => {
  let model;

  beforeEach(() => {
    model = new NewsModel();
  });

  it('returns an empty list of headlines to the News list', () => {
    expect(model.getNews()).toEqual([]);
  });

  it('adds a headline to the News list', () => {
    model.addNews('Platinum Jubilee: How have we celebrated in the past?');

    expect(model.getNews()).toEqual([
      'Platinum Jubilee: How have we celebrated in the past?',
    ]);
  });

  it('clears all the articles on the News list', () => {
    model.addNews('Platinum Jubilee: How have we celebrated in the past?');
    model.addNews('The surprising history of gun laws in America');
    model.reset();

    expect(model.getNews()).toEqual([]);
  });
});
