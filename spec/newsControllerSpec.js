(function(exports) {

  function DoubleNewsList() {
    this.list = [ {
      headline: "Headline 1",
      id: 0,
      image: 'image'
    }]
  }

  DoubleNewsList.prototype = {
    getAPIData: function() {},
    viewAll: function() {
      return this.list
    }
  }

  function DoubleAPIData() {
    this.results
  }

  DoubleAPIData.prototype.getRequest = function() {
    var articleData = {
      webTitle: "Headline",
      fields: {thumbnail: 'image'},
      apiUrl: 'apiUrl'
    }
    this.results = [articleData, articleData]
  }

  var apiData = new DoubleAPIData()

  function DoubleHeadlinesView() {
    this.newsList = new DoubleNewsList
  }

  DoubleHeadlinesView.prototype.displayHeadlines = function(){
    return `<ul>Headline</ul>`
  }

  var newsList = new DoubleNewsList(apiData, 'fakeAPIRequestURL')
  var newsController = new NewsController(newsList)
  document.write("THE BEST TESTS")
  addAppDiv()

  function initializedWithNewsList() {
    console.log('initializedWithNewsList')
    expect(newsController.newsList).toBe(new DoubleNewsList)
  }

  function getArticles() {
    console.log('getArticles')
    newsController.newsList.getAPIData()
    setTimeout(function() {
      var articleTag = document.getElementById('article')
      expect(articleTag.innerHTML).toInclude(newsController.newsList.list[0].headline)
    }, 500)
    
  }


  function addAppDiv() {
    var mockedElement = document.createElement('div')
    mockedElement.id = 'app'
    document.getElementsByTagName('body').item(0).appendChild(mockedElement)
  }


  initializedWithNewsList()
  getArticles()

})(this)
