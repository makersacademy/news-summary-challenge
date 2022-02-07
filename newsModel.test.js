/**
 * @jest-environment jsdom
 */

const NewsModel = require('./newsModel.js');

describe('NewsModel', () => {
  it('returns an empty array', () => {
    const model = new NewsModel();
    expect(model.getArticles()).toEqual([]);
  });

  it('adds an article', () => {
    const model = new NewsModel();
    model.addArticle('the first article');
    expect(model.getArticles()).toEqual(['the first article']);
  });
});

