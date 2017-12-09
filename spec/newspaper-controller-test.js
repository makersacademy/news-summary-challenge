describe('Newspaper Controller', function () {
  it ('holds a Newspaper View', function () {
    var newspaperController = new NewspaperController()
    expect(newspaperController.newspaperView).toBeInstanceOf(NewspaperView)
  })

  it ('holds a Single Article View Constructor', function () {
    var newspaperController = new NewspaperController()
    expect(newspaperController._singleArticleView).toEqual(SingleArticleView)
  })

  it ('can create a new Article by delegating to the Newspaper model', function () {
    var newspaperController = new NewspaperController()
    newspaperController.newArticle()
    expect(newspaperController.newspaperView.newspaper.getAllArticles().length).toEqual(1)
  })

  it ('can view all Articles by delegating to the Newspaper model', function () {
    var newspaperController = new NewspaperController()
    newspaperController.newArticle()
    expect(newspaperController.getAllArticles()[0]).toBeInstanceOf(Article)
  })

  it ('renders HTML headlines onto the screen', function () {
    var headlinesList = document.getElementById('headlines')
    var newspaperController = new NewspaperController()
    newspaperController.newArticle('Hi Everybody!')
    newspaperController.newArticle('Hi Dr. Nick!')
    var expectedString =
      '<li><div id="article-1"><a href="#1">Hi Everybody!</a></div></li>' +
      '<li><div id="article-2"><a href="#2">Hi Dr. Nick!</a></div></li>'
    newspaperController.printHeadlinesToList()
    expect(headlinesList.innerHTML).toEqual(expectedString)
  })

  it ('can get the HTML from a Single Article View', function () {
    var newspaperController = new NewspaperController()
    var article = new Article(1, 'headline', 'url', 'thumbnail', 'api')
    var expectedHtmlString = '<div><img src="thumbnail"></div>' +
      '<div><h4>headline</h4></div>' +
      '<div><a href="url">See Full Story</a></div>'
    expect(newspaperController.getSingleArticleHtml(article)).toEqual(expectedHtmlString)
  })

})
