describe ('Single Article View', function () {
  it ('holds an Article when instantiated', function () {
    var article = new Article(1, 'headline', 'url', 'thumbnail', 'api')
    var singleArticleView = new SingleArticleView (article)
    expect(singleArticleView._article).toEqual(article)
  })

  it ('creates an HTML string to format the preview of an Article', function () {
    var article = new Article(1, 'headline', 'url', 'thumbnail', 'api')
    var singleArticleView = new SingleArticleView (article)
    var expectedHtmlString = '<div><img src="thumbnail"></div>' +
      '<div><h4>headline</h4></div>' +
      '<div><a href="url">See Full Story</a></div>'

    expect(singleArticleView.convertToHtml()).toEqual(expectedHtmlString)
  })
})
