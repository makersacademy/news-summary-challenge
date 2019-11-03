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

    displayListNews("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail").then(function(data) {
      headlinesList = new HeadlinesList(data)
      headlinesListView = new HeadlinesListView(headlinesList)
      headlinesList.addHeadlines()
      displayHTML(headlinesListView.returnHTML())

      if (news !== undefined) {
        displaySingleNews(news).then(function(data) {
          headline = headlinesList.getHeadlineByUrl(news.substring(1))
          getSummary(headline.url).then(function(data) {
            headline.setSummary(data)
            headlineView = new HeadlineView(headline)
            displayHTML(headlineView.returnSummary())
          })
        })
      }
    })
  }

  function getNewsFromUrl(location){
    return location.hash.split("#news")[1]
  }

  function displaySingleNews(id) {
      var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + id
      return fetchNews(url).then(function(data) {
          return data.response.content.fields
        })
    }

  function getSummary(summaryUrl) {
    var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + summaryUrl

    return fetchNews(url).then(function(data) {
      return data.sentences.join('<br>')
    })
  }

  function displayHTML(content) {
    var element = document.getElementById('news')
    element.innerHTML = content
  }

  function fetchNews(url) {
    return fetch(url).then(function(response) {
      return response.json()
    })
  }

  function displayListNews(url) {

      return fetchNews(url).then(function(data) {
          return data.response.results
        });
    }

  exports.Controller = Controller
})(this)
