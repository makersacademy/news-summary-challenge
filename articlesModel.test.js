const ArticlesModel = require('./articlesModel');

let articles;
beforeEach(() => {
  articles = new ArticlesModel();
})

describe('Articles model', () => {
  it('starts with no articles', () => {
    expect(articles.getArticles()).toEqual([]);
  });

  it('sets and returns articles', () => {
    const articlesData = [
      {data: "First article"},
      {data: "Second article"},
      {data: "Third article"}
    ];

    articles.setArticles(articlesData);

    expect(articles.getArticles()).toEqual(articlesData);
  });
});
