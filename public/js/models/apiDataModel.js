(function(exports) {
  function APIData(apiType) {
    this.results
    this.apiType = apiType
  }

  APIData.prototype = {
    getRequest: function(apiRequestUrl) {
        var request = new XMLHttpRequest()
        var self = this
        request.open('GET', apiRequestUrl, true)
        request.onload = function() {
          var data = JSON.parse(this.response)
          if (self.apiType === 'newsList') {
            self.results = data.response.results
          } else {
            self.results = data
          }
        }
        request.send()
      },
    }

  exports.APIData = APIData
})(this)