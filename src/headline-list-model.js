(function(exports) {
  function HeadlineList() {
    this.headlineListArray = [];
  }

  HeadlineList.prototype.getHeadlineListArray = function() {
    return this.headlineListArray;
  }

  HeadlineList.prototype.addHeadlines = function(dummyApi) {
    var dummyApi = {'response': {'results': [{'webTitle': "Whatapalaver wow's the techno world", 'webUrl': 'www.whatapalaver.co.uk', 'fields': {'thumbnail': 'www.testimage.co.uk'}}, {'webTitle': "It rained on Bank Holiday Monday", 'webUrl': 'www.shockhorror.co.uk', 'fields': {'thumbnail': 'www.testimage2.co.uk'}}]}}

    for(var i = 0; i < dummyApi.response.results.length; i++) {
      var id = this.headlineListArray.length;
      var headline = new Headline(dummyApi.response.results[i], id)
      this.headlineListArray.push(headline)
    }
  };

  exports.HeadlineList = HeadlineList;
})(this);