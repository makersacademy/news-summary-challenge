(function(exports){
  function APIInterface (optionalHeadlineListModel) {
    this.HeadlineListModel = optionalHeadlineListModel || HeadlineList
  }

  APIInterface.prototype = {
    getHeadlines: function () {
      var response
      if (testEnvironment) {
        response = JSON.parse(exampleSearchResponse)
      } else {
      }
      var list = new this.HeadlineListModel()
      response.response.results.forEach(function(story) {
        list.add({ headline: story.webTitle })
      })
      return list
    }
  }

  exports.APIInterface = APIInterface
})(this)
