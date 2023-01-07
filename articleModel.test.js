const ArticleModel = require('./articleModel');

describe(ArticleModel, () => {

  let model;
  beforeEach(() => {
    model = new ArticleModel();
  });

  it('starts with an empty array', () => {
    expect(model.getArticles()).toEqual([]);
  });

  it('adds articles to the model', () => {
    model.setArticles([
      { headline: 'headline 1', thumbnail: 'thumbnail 1', webUrl: 'url 1' },
      { headline: 'headline 2', thumbnail: 'thumbnail 2', webUrl: 'url 2' },
      { headline: 'headline 3', thumbnail: 'thumbnail 3', webUrl: 'url 3' },
    ]);

    for (let i = 0; i < 3; i++) {
      expect(model.getArticles()[i]).toMatchObject(
        { headline: `headline ${i + 1}`, thumbnail: `thumbnail ${i + 1}`, webUrl: `url ${i + 1}` }
      );
    }
  });

  it('throws unless adding an array of articles', () => {
    expect(() => model.setArticles(
      { headline: 'headline 1', thumbnail: 'thumbnail 1', webUrl: 'url 1' }
    )).toThrow('Input to ArticleModel.setArticles must be an array.');
  });

  it('throws unless all array elements are article objects', () => {
    expect(() => model.setArticles([
      { headline: 'headline 1', thumbnail: 'thumbnail 1', webUrl: 'url 1' },
      { headline: 'headline 1', thumbnail: 'thumbnail 1'}
    ])).toThrow('Input to ArticleModel.setArticles must be an array of article objects');

    expect(() => model.setArticles([
      { headline: 'headline 1', thumbnail: 'thumbnail 1', webUrl: 'url 1' },
      { headline: 'headline 1', webUrl: 'url 1' }
    ])).toThrow('Input to ArticleModel.setArticles must be an array of article objects');

    expect(() => model.setArticles([
      { headline: 'headline 1', thumbnail: 'thumbnail 1', webUrl: 'url 1' },
      { thumbnail: 'thumbnail 1', webUrl: 'url 1' }
    ])).toThrow('Input to ArticleModel.setArticles must be an array of article objects');
  });
});
