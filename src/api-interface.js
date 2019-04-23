(function(exports){
  function APIInterface (optionalHeadlineListModel) {
    this.HeadlineListModel = optionalHeadlineListModel || HeadlineList
  }

  APIInterface.prototype = {
    getHeadlines: function (callback) {
      var request, response, that = this

      if (environment === "test") {
        this._parseHeadlineResultsAndRunCallback(exampleSearchResponse, callback)
      } else {

        request = new XMLHttpRequest()
        request.open('GET', `https://content.guardianapis.com/search?section=business|education|environment|inequality|law|politics|uk-news|world&show-fields=thumbnail&api-key=${guardianApiKey}`, true);

        request.onload = function () {
          that._parseHeadlineResultsAndRunCallback(this.response, callback)
        };

        request.send();
      }
    },

    _parseHeadlineResultsAndRunCallback: function(response, callback) {
      var list = new this.HeadlineListModel()
      var data = JSON.parse(response)
      data.response.results.forEach(function(story) {
        list.add({
          headline: story.webTitle,
          url: story.webUrl,
          thumbnail: story.fields.thumbnail,
          id: story.id
        })
      })
      callback(list)
    },

    // this part not tested!
    getSummary: function (headline, callback) {
      var request, response, that = this

      if (environment === "test") {
        this._parseSummaryResultsAndRunCallback(exampleSummaryResponse, callback)
      } else {

        request = new XMLHttpRequest()
        request.open('GET', `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${headline.getURL()}`, true);

        request.onload = function () {
          that._parseSummaryResultsAndRunCallback(headline, this.response, callback)
        };

        request.send();
      }
    },

    _parseSummaryResultsAndRunCallback: function(headline, response, callback) {
      var data = JSON.parse(response)
      var summary = new Summary({
        thumbnail: headline.getThumbnail(),
        headline: headline.getHeadline(),
        summary: data.sentences.join(" ")
      })
      callback(summary)
    }
  }

  exports.APIInterface = APIInterface
})(this)
