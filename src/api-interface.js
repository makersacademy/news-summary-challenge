(function(exports){
  function APIInterface (optionalHeadlineListModel) {
    this.HeadlineListModel = optionalHeadlineListModel || HeadlineList
  }

  APIInterface.prototype = {
    getHeadlines: function (optionalResponse) {
      var response
      if (typeof optionalResponse === 'undefined') {
      } else {
        response = JSON.parse(optionalResponse)
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
