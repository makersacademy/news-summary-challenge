(function(exports) {

  function NewsStoryListView(newsStoryList) {
    this.newsStoryList = newsStoryList;
    console.log(this.newsStoryList.listOfStories)
  };

  NewsStoryListView.prototype.displayNewsStoryList = function() {
    console.log(this.newsStoryList.listOfStories)
    var arrayOfNewsStoryObjects = this.newsStoryList.listOfStories
    var htmlString = ""
    arrayOfNewsStoryObjects.forEach(function(element) {
      htmlString += `<div><h2><a href=${element.originURL}>${element.headline}</a></h2></div>`
    })
    return htmlString;
  }

  exports.NewsStoryListView = NewsStoryListView;
})(this);
