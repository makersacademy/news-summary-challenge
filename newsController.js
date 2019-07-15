function NewsController() {};

NewsController.prototype.createListOfResults = function(arrayOfResults, NewsStorylistConstructor = NewsStoryList) {
  this.newsStoryList = new NewsStoryList
  this.newsStoryList.addToList(arrayOfResults)
  return this.newsStoryList
}

NewsController.prototype.displayResults = function(newsStoryList, NewsStoryListViewConstructor = NewsStoryListView) {
  var newsStoryListView = new NewsStoryListViewConstructor(newsStoryList)
  var elementToChange = document.getElementById("app")
  elementToChange.innerHTML = newsStoryListView.displayNewsStoryList()
}

NewsController.prototype.getData = function() {
  var newsController = this
  fetch ("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics")
    .then(function(resp) {
      return resp.json()
    })
    .then(function(json) {
      arrayOfResults = json.response.results
      newsController.displayResults(newsController.createListOfResults(arrayOfResults))

    })
    .catch(function(error) {
      console.log(error)
    })
}

var newscontroller = new NewsController
newscontroller.getData();
