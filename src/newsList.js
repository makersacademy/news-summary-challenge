(function(exports) {
  function NewsList() {
    this.headlineList = []
    this.view = "<ul>"
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
        // view += '<img src="' + results[i].fields.main + '" width="200>"'
        view += '<li><div><a href="' + results[i].webUrl + '">'
        view += results[i].webTitle + '</li></div></li>'
      } view += '</ul>'
        document.getElementById('app').innerHTML = view
    }

    function addHeadlines(results, headlineList) {
      var headlines = results.map(resultObject => resultObject.webTitle)
      for (let i = 0; i < headlines.length; i++) {
        var newsStory = new NewsStory(headlines[i], [i + 1].join())
        // var newsStory = {}
        // newsStory.headline = headlines[i]
        // newsStory.id = [i + 1].join()
        headlineList.push({newsStory})
        // headlineList[i] = (newsStory)
      }
    }

  exports.NewsList = NewsList
})(this)
