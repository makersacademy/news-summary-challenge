(function ArticleSpec() {
  it('Adds an article to the collection', () => {
    const articleDouble = {};
    const collection = new ArticleCollection();
    collection.add(articleDouble);
    jennifer.expects(collection.articles).toInclude(articleDouble);
  });
}());
