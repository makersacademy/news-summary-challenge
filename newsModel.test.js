const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  it('should return an empty array initially', () => {
    const model = new NewsModel();
    expect(model.getNews()).toEqual([]);
  })

  it('should return an array with 2 headlines added', () => {
    const model = new NewsModel();
    model.addArticle("Joe hates JavaScript");
    model.addArticle("JavaScript hates Joe");
    expect(model.getNews()).toEqual(["Joe hates JavaScript", "JavaScript hates Joe"]);
  })

  it('should set an array of articles', () => {
    const model = new NewsModel();
    model.addArticle("Pikachu");
    model.setArticles(["Bulbosaur", "Charmander"]);
    expect(model.getNews()).toEqual(["Pikachu", "Bulbosaur", "Charmander"]);
  });
});