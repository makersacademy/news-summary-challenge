(function(exports) {

  function Controller() {

    displayNews("https://content.guardianapis.com/search?&show-fields=thumbnail,trailText&api-key=").then(function(data) {
      this.headlinesList = new HeadlinesList(data)
      this.headlinesListView = new HeadlinesListView(this.headlinesList)
      this.headlinesList.addHeadlines()
      displayHTML(this.headlinesListView.returnHTML())
    })
    window.addEventListener("hashchange", viewSingleNews)
    }

  function viewSingleNews() {
    var news = getNewsFromUrl(window.location)
    if (news === undefined) {
      displayHTML(this.headlinesListView.returnHTML())
    } else {
      singleNews(news).then(function(data) {
        var headline = this.headlinesList.getHeadlineByUrl(news.substring(1))
        headline.setSummary(data.trailText)
        // headline.setThumbnail(data.thumbnail)
        // console.log(data.thumbnail)
        var headlineView = new HeadlineView(headline)
        displayHTML(headlineView.returnSummary())
      })
    }
  }

  function getNewsFromUrl(location){
    return location.hash.split("#news")[1]
  }

  function singleNews(id) {
    return fetch('secret.txt').then(function(response) {
      return response.text();
    }).then(function(response) {
      var url = "https://content.guardianapis.com/" + id + "?api-key=" + response + "&show-fields=trailText"
      return fetch(url).then(function(response) {
        return response.json().then(function(data) {
          return data.response.content.fields
        })
      })
    })
  }

  function displayHTML(content) {
    var element = document.getElementById('news')
    element.innerHTML = content
  }

  function fetchSecret() {
    return fetch('secret.txt').then(function(response) {
      return response.text()
    })
  }

  function fetchNewsList(url) {
    return fetch(url).then(function(response) {
      return response.json()
    })
  }

  function displayNews(content) {

    return fetchSecret().then(function(response) {
      var url = content + response

      return fetchNewsList(url).then(function(data) {
          return data.response.results
        });
      })
    }

  exports.Controller = Controller
})(this)
