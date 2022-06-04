const NewsModel = require('../models/newsModel');

describe('NewsModel', () => {
  let model;

  beforeEach(() => {
    model = new NewsModel();
  });

  it('returns an empty list of headlines to the News list', () => {
    expect(model.getNews()).toEqual([]);
  });

  it('clears all the articles on the News list', () => {
    model.addNews(['Headline 1', 'Headline 2']);
    model.reset();

    expect(model.getNews()).toEqual([]);
  });

  it('adds the headlines to the News list', () => {
    model.addNews(['Headline 1', 'Headline 2']);

    expect(model.getNews()).toEqual(['Headline 1', 'Headline 2']);
  });
});
