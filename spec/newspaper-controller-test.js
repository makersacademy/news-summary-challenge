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
      '<ul><li><div id="article-1"><a href="#1">Hi Everybody!</a></div></li>' +
      '<li><div id="article-2"><a href="#2">Hi Dr. Nick!</a></div></li></ul>'
    newspaperController.printHeadlinesToList()
    expect(headlinesList.innerHTML).toEqual(expectedString)
  })

  it ('can get the HTML from a Single Article View', function () {
    var newspaperController = new NewspaperController()
    var article = new Article(1, 'headline', 'url', 'thumbnail', 'api')
    var expectedHtmlString = '<div><h4>headline</h4></div>' +
      '<div><img src="thumbnail"></div>' +
      '<div><a href="url">See Full Story</a></div><br>'
    expect(newspaperController.getSingleArticleHtml(article)).toEqual(expectedHtmlString)
  })

  it ('is initialized with a HttpRequestController', function () {
    var newspaperController = new NewspaperController()
    expect(newspaperController.httpRequestController).toBeInstanceOf(HttpRequestController)
  })

  it ('can iterate over an Array of JSON and create multiple Articles', function () {
    var articles = [
      {
        apiUrl: "https://content.guardianapis.com/politics/2017/dec/10/labour-backs-easy-movement-of-eu-workers-after-brexit-says-keir-starmer",
        fields: {
          headline: "Labour backs 'easy movement' of EU workers after Brexit, says Keir Starmer",
          thumbnail: "https://media.guim.co.uk/6e4e992bfd8f55a70996e39a58cc3981e1695fec/0_113_3000_1800/500.jpg"
        },
        id: "politics/2017/dec/10/labour-backs-easy-movement-of-eu-workers-after-brexit-says-keir-starmer",
        webPublicationDate: "2017-12-10T14:03:25Z",
        webTitle: "Labour backs 'easy movement' of EU workers after Brexit, says Keir Starmer",
        webUrl: "https://www.theguardian.com/politics/2017/dec/10/labour-backs-easy-movement-of-eu-workers-after-brexit-says-keir-starmer"
      }
    ]

    var newspaperController = new NewspaperController ()
    newspaperController.saveArticles(articles)
    expect(newspaperController.getAllArticles()[0].headline).toEqual("Labour backs 'easy movement' of EU workers after Brexit, says Keir Starmer")
  })

})
