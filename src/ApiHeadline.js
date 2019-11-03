(function(exports) {
  function APIHeadline() {
    this.data = []
    this.headlines = []
    this.urls = []
    this.summaryData = []
    this.summary = 'Loading'
    this.images = []
  }

  APIHeadline.prototype.getData = function () {
      let self = this;
      fetch('https://content.guardianapis.com/search?show-fields=all&show-elements&api-key=25ceccca-b9bf-4f41-b703-b64ec781dfd2')
      .then(function(response) {
        return response.json();
      })
       .then(function(myJson) {
         self.data = myJson.response.results
      })
       .then(function() {
         self.getHeadlines()
       })
       .then(function() {
        self.getUrl()
      })
      .then(function() {
        self.getimages()
      })
    },

  APIHeadline.prototype.allData = function () {
    return this.data
  }

  APIHeadline.prototype.allHeadlines = function () {
    return this.headlines
  }

  APIHeadline.prototype.allUrls = function () {
    return this.urls
  }

  APIHeadline.prototype.getHeadlines = function() {
    let self = this
    this.allData().forEach(function(headline) {
    self.headlines.push(headline['webTitle'])
    })
  }

  APIHeadline.prototype.getimages = function() {
    let self = this
    this.allData().forEach(function(headline) {
    self.images.push(headline['fields']['thumbnail'])
    })
  }

  APIHeadline.prototype.allimages = function () {
    return this.images
  }



  APIHeadline.prototype.getUrl = function() {
    let self = this
    this.allData().forEach(function(headline) {
      self.urls.push(headline['webUrl'])
    })
}

  APIHeadline.prototype.textSummary = function (url) {
    let self = this
      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`)
      .then(function(response) {
        return response.json();
        })
      .then(function(myJson) {
        self.summaryData = myJson
        })
      .then (function() {
        return self.summary = self.summaryData['sentences'].join("<br>\n<br>")
      })
      .then(function() {
        document
      .getElementById('headlines')  
      .innerHTML = `${self.summary}`
      })
     }

  exports.APIHeadline = APIHeadline
})(this)
