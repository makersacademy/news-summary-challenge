describe('Newspaper Controller', function () {
  it ('holds a Newspaper View', function () {
    var newspaperController = new NewspaperController()
    expect(newspaperController.newspaperView).toBeInstanceOf(NewspaperView)
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

})
