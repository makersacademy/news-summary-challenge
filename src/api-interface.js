(function(exports){
  function APIInterface (optionalHeadlineListModel) {
    this.HeadlineListModel = optionalHeadlineListModel || HeadlineList
  }

  APIInterface.prototype = {
    getHeadlines: function (callback) {
      var request, response, that = this

      if (environment === "test") {
        this._parseResultsAndRunCallback(exampleSearchResponse, callback)
      } else {

        request = new XMLHttpRequest()
        request.open('GET', `https://content.guardianapis.com/search?section=business|education|environment|inequality|law|politics|uk-news|world&show-fields=thumbnail&api-key=${guardianApiKey}`, true);

        request.onload = function () {
          that._parseResultsAndRunCallback(this.response, callback)
        };

        request.send();
      }
    },

    _parseResultsAndRunCallback: function(response, callback) {
      var list = new this.HeadlineListModel()
      var data = JSON.parse(response)
      data.response.results.forEach(function(story) {
        list.add({
          headline: story.webTitle,
          url: story.webUrl,
          thumbnail: story.fields.thumbnail
        })
      })
      callback(list)
    }
  }

  exports.APIInterface = APIInterface
})(this)
