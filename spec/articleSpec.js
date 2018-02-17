(function ArticleSpec() {
  it('Should have a headline property', () => {
    const article = new Article('Something Happened');
    jennifer.expects(article.headline).toEqual('Something Happened');
  });
}());
