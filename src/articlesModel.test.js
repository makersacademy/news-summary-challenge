const ArticlesModel = require('./articlesModel');

describe('ArticlesModel', () => {
  beforeEach(() => {
    model = new ArticlesModel();
  });

  it('starts off with an empty list of articles', () => {
    expect(model.getArticles()).toEqual([]);
  });

  it('addArticle adds an article with a headline to this.articles', () => {
    const article = {
      headline: 'Real Madrid reach the Champions League final'
    }
    model.addArticle(article);
    expect(model.getArticles()).toEqual([article]);
  });

  it('convertData converts the data for an article received from the API into a more readable JS object', () => {
    const data = {
      webTitle: 'Real Madrid reach the Champions League final',
      webUrl: 'www.madridfinal.com',
      fields: {
        thumbnail: 'madridpicture.jpg'
      }
    };
    const article = {
      headline: 'Real Madrid reach the Champions League final',
      picture: 'madridpicture.jpg',
      url: 'www.madridfinal.com'
    }
    expect(model.convertData(data)).toEqual(article);
  })
});