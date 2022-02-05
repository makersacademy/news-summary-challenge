const ArticlesModel = require('./articlesModel');

let articles;
beforeEach(() => {
  articles = new ArticlesModel();
})

const articlesData = [
  {data: "First article"},
  {data: "Second article"},
  {data: "Third article"}
];

describe('Articles model', () => {
  it('starts with no articles', () => {
    expect(articles.getArticles()).toEqual([]);
  });

  it('sets and returns articles', () => {
    articles.setArticles(articlesData);

    expect(articles.getArticles()).toEqual(articlesData);
  });

  it('resets the articles', () => {
    articles.setArticles(articlesData);

    articles.reset();

    expect(articles.getArticles()).toEqual([]);
  })
});
