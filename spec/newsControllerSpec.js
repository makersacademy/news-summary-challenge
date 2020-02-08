
(function(exports) {
  var newsList = new NewsList()
  var newsController = new NewsController(newsList)
  document.write("THE BEST TESTS")

  function newControllerIsInstantiated() {
    console.log('newControllerIsInstantiated')
    expect(newsController).toBe(new NewsController())
  }

  function testInnerHTML() {
    console.log('testInnerHTML')
    addAppDiv()
    newsController.addArticle('Headline 1')
    newsController.displayHeadlines()
    expect(document.getElementById("app").innerHTML).toInclude('Headline 1')
  }

  function addAppDiv() {
    var mockedElement = document.createElement('div')
    mockedElement.id = 'app'
    document.getElementsByTagName('body').item(0).appendChild(mockedElement)
  }

  newControllerIsInstantiated()
  testInnerHTML()
})(this)