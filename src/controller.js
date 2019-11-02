(function(exports) {

  function Controller() {

    displayNews().then(function(data) {
      this.headlinesList = new HeadlinesList(data)
      this.headlinesListView = new HeadlinesListView(this.headlinesList)
      this.headlinesList.addHeadlines()
      displayHTML()
    })
  }
  exports.Controller = Controller
})(this)

function displayHTML() {
  var element = document.getElementById('news')
  element.innerHTML = this.headlinesListView.returnHTML()
}

function displayNews() {

  return fetch('secret.txt').then(function(response) {
    return response.text();
  }).then(function(response) {
    var url = "https://content.guardianapis.com/search?api-key=" + response

    return fetch(url).then(function(response) {
      return response.json().then(function(data) {
        return data.response.results
      });
    })
  })
}
