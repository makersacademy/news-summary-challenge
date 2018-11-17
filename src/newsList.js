(function(exports) {
  function NewsList() {
    this.newsArray = []
  }

  NewsList.prototype.renderList = function() {
    console.log(this.newsArray)
    return this.newsArray
  }

  NewsList.prototype.getNews = function() {
    url = "https://content.guardianapis.com/search?api-key=64a5abc0-c1dc-431b-9bb4-3a9114917ee1"
    fetch(url)
      .then(response => {return response.json() })
      .then(data => {
        this.newsArray = data.response.results
        // console.log(this.newsList)
      }).catch(err => {
        console.log("API Error: Gaurdian")
      })
  }

  exports.NewsList = NewsList
})(this)

// newsList = new NewsList
// newsList.getNews()
// newsList.renderList()
