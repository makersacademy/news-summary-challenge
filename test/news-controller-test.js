describe("a news controller", function() {
  it("can be instantiated", function() {
    var newsController = new NewsController(new NewsList)
    expect(newsController).isInstanceOf(NewsController)
  })
  it('can insert news HTML into a page', function () {
    var htmlMock = {
      innerHTML: 'a string'
    }
    document.getElementById = function(id) {
      return htmlMock;
    }
    var newsController = new NewsController(new NewsList)
    newsController.getHTML()
    expect(htmlMock.innerHTML).isEqualTo('<ul><li><div><a href="#news/1">Hannah Montana running for 2020 Presidency</a></div></li></ul>')
  })
})
