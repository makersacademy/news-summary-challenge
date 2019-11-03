(function(exports) {

  function Controller() {
    var headline = null
    var headlineView = null
    var headlinesList = null
    var headlinesListView = null

    displayNews()
    window.addEventListener("hashchange", displayNews)
    }

  function displayNews() {
    var news = getNewsFromUrl(window.location)

    displayListNews("https://content.guardianapis.com/search?&show-fields=thumbnail,trailText&api-key=").then(function(data) {
      headlinesList = new HeadlinesList(data)
      headlinesListView = new HeadlinesListView(headlinesList)
      headlinesList.addHeadlines()
      displayHTML(headlinesListView.returnHTML())

      if (news !== undefined) {
        displaySingleNews(news).then(function(data) {
          headline = headlinesList.getHeadlineByUrl(news.substring(1))
          headline.setSummary(data.trailText)
          headlineView = new HeadlineView(headline)
          displayHTML(headlineView.returnSummary())
        })
      }
    })
  }

  function getNewsFromUrl(location){
    return location.hash.split("#news")[1]
  }

  function displaySingleNews(id) {
    return fetchSecret().then(function(response) {
      var url = "https://content.guardianapis.com/" + id + "?api-key=" + response + "&show-fields=trailText"
      return fetchNews(url).then(function(data) {
          return data.response.content.fields
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

  function fetchNews(url) {
    return fetch(url).then(function(response) {
      return response.json()
    })
  }

  function displayListNews(content) {

    return fetchSecret().then(function(response) {
      var url = content + response

      return fetchNews(url).then(function(data) {
          return data.response.results
        });
      })
    }

  exports.Controller = Controller
})(this)
