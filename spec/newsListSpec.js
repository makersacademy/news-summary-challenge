(function(exports) {

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

  var newsList = new NewsList(apiData, 'fakeAPIRequestURL')
  newsList.getAPIData()

  function getAPIDataAddsArticlesToList() {
    console.log('getAPIDataAddsArticlesToList')
    expect(newsList.list[0].headline).toEqual(apiData.results[0].webTitle)
  }

  function viewAllArticles() {
    console.log('viewAllArticles')
    expect(newsList.viewAll()[0]).toBe(new NewsArticle)
  }

  function addUniqueId() {
    console.log('addUniqueId')
    expect(newsList.list[0].id).toEqual(0)
    expect(newsList.list[1].id).toEqual(1)
  }

  setTimeout(function() {
    getAPIDataAddsArticlesToList()
    viewAllArticles()
    addUniqueId()
  }, 300)


})(this)