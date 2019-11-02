(function(exports) {

  function Controller() {

    displayNews("https://content.guardianapis.com/search?api-key=").then(function(data) {
      this.headlinesList = new HeadlinesList(data)
      this.headlinesListView = new HeadlinesListView(this.headlinesList)
      this.headlinesList.addHeadlines()
      displayHTML(this.headlinesListView.returnHTML())
    })
    window.addEventListener("hashchange", viewSingleNews)
    }

  function viewSingleNews() {
    var news = getNewsFromUrl(window.location)
    singleNews(news).then(function(data) {
      var headline = this.headlinesList.getHeadlineByUrl(news.substring(1))
      headline.setBody(data)
      var headlineView = new HeadlineView(headline)
      displayHTML(headlineView.returnSummary())
    })
  }

  function getNewsFromUrl(location){
    return location.hash.split("#news")[1]
  }

  function singleNews(id) {
    return fetch('secret.txt').then(function(response) {
      return response.text();
    }).then(function(response) {
      var url = "https://content.guardianapis.com/" + id + "?api-key=" + response + "&show-fields=body"
      return fetch(url).then(function(response) {
        return response.json().then(function(data) {
          return data.response.content.fields.body
        })
      })
    })
  }

  function displayHTML(content) {
    var element = document.getElementById('news')
    element.innerHTML = content
  }

  function displayNews(content) {

    return fetch('secret.txt').then(function(response) {
      return response.text();
    }).then(function(response) {
      var url = content + response

      return fetch(url).then(function(response) {
        return response.json().then(function(data) {
          return data.response.results
        });
      })
    })
  }
  exports.Controller = Controller
})(this)
