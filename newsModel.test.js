// file: newsModel.test.js

const NewsModel = require('./newsModel');
let model;

describe('NewsModel', () => {
  beforeEach(() => {
    model = new NewsModel();
  });

  it('gets newsData and returns an empty array', () => {
    expect(model.getNews()).toEqual([]);
  });

  it('can set the notes from a given response set', () => {
    model.setNews([{ thumbnail: 'one', headline: 'two', webUrl: 'three' }]);
    expect(model.getNews()).toEqual([
      { thumbnail: 'one', headline: 'two', webUrl: 'three' },
    ]);
  });
});
