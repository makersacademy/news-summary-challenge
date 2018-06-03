(function(exports) {
  function NewsController() {

    NewsController.prototype.GetNewsDivElement = function(doc = document) {
      var newsDiv = doc.getElementById('news')
      return newsDiv
    }
  }

  // NewsController.prototype.GetGuardianNewsAPI = function() {
  //   var guardianAPI = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
  //   var request = new XMLHttpRequest();
  //   request.open("GET", guardianAPI, false);
  //   request.send(null);
  //   return request.responseText;
  // }
  //
  // NewsController.prototype.GuardianJSONObject = function() {
  //   var guardianJSONobject = JSON.parse(this.GetGuardianNewsAPI())
  //   console.log(guardianJSONobject)
  // }



  exports.NewsController = NewsController
})(this);
