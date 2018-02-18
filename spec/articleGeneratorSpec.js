(function ArticleGeneratorSpec() {
  const articleDouble = {
    headline: 'a headline',
    url: 'a url',
    summary: 'a summary',
  };


  const generator = ArticleGenerator;
  const html = generator.generate(articleDouble);

  it('turns the headline information into html', () => {
    jennifer.expects(html).toIncludeString('<div id="headline">a headline</div>');
  });

  it('turns the url information into html', () => {
    jennifer.expects(html).toIncludeString('<div id="url"><a href="a url">FULL ARTICLE</a></div>');
  });

  it('turns the summary information into html', () => {
    jennifer.expects(html).toIncludeString('<div id="summary">a summary</div>');
  });
}());
