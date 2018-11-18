(function(exports) {
  function NewsList() {
    this.headlineId = 0
    this.headlineList = []
    this.view = "<ul>"
  }

  NewsList.prototype.renderList = function() {
    return this.headlineList
  }

  NewsList.prototype.getNews = function() {
    url = "https://content.guardianapis.com/search?api-key=64a5abc0-c1dc-431b-9bb4-3a9114917ee1"
    fetch(url)
      .then(response => {return response.json()
      }).then(data => {
        addHeadlines(data.response.results, this.headlineList)
        render(data.response.results, this.view)
      }).catch(err => {
        console.log("API Error: Gaurdian")
      })
  }

    function render(results, view) {
      for (let i = 0; i < results.length; i++) {
        view += '<li>' + results[i].webTitle + '</li>'
      } view += '</ul>'
        document.getElementById('app').innerHTML = view
    }

    function addHeadlines(results, headlineList) {
      var headlines = results.map(resultObject => resultObject.webTitle)
      for (let i = 0; i < headlines.length; i++) {
        var newsStory = new NewsStory(headlines[i], [i + 1].join())
        headlineList.push(newsStory)
      }
    }

  exports.NewsList = NewsList
})(this)
