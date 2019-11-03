(function(exports) {
  function APIHeadline() {
    this.data = []
    this.headlines = []
  }

  APIHeadline.prototype.getData = function () {
      let self = this;
      fetch('https://content.guardianapis.com/search?show-fields=all&show-elements&api-key=25ceccca-b9bf-4f41-b703-b64ec781dfd2')
      .then(function(response) {
        return response.json();
      })
       .then(function(myJson) {
         self.data = myJson.response.results;
      });
    },

  APIHeadline.prototype.allData = function () {
    return this.data
  }

  APIHeadline.prototype.allHeadlines = function () {
    return this.headlines
  }

  APIHeadline.prototype.getHeadlines = function() {
    let self = this
    this.allData().forEach(function(headline) {
    self.headlines.push(headline['webTitle'])
    })
  }

  exports.APIHeadline = APIHeadline
})(this)
