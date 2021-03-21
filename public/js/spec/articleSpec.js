let article;

describe('Article', () => {
  describe('headline', () => {
    it('shows the article headline', () => {
      article = new Article({headline: "Test"});
      expect(article.headline).toEqual('Test');
    });
  });

  describe('body', () => {
    it('shows the article body', () => {
      article = new Article({body: "Body"});
      expect(article.body).toEqual('Body');
    });
  });

  describe('author', () => {
    it('shows the article author', () => {
      article = new Article({author: "Author"});
      expect(article.author).toEqual('Author');
    });
  });
});
