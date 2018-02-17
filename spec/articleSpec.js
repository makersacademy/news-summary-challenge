(function ArticleSpec() {
  const article = new Article('Something Happened', 'http://www.news.com/article-5');

  it('Should have a headline property', () => {
    jennifer.expects(article.headline).toEqual('Something Happened');
  });

  it('Should have a url property', () => {
    jennifer.expects(article.url).toEqual('http://www.news.com/article-5');
  });
}());
