
const { exec } = require('child_process');
const fetch = require("node-fetch");
var credentials = require("./credentials");

(function(exports) {

  function GuardianRequest() {
    this.rawOutput = {};
    this.articleListarray = [];
  }

  GuardianRequest.prototype.getContent = function (apikey, callback) {
    apiUrl = "https://content.guardianapis.com/search?api-key=" + apikey;
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        callback(myJson);
      });
  };

  GuardianRequest.prototype.getHeadlines = function(apikey) {
    this.getContent(apikey, myJson => {
      var results = myJson.response.results;
      results.forEach(myFunction);
      function myFunction(value) {
        this.articleListarray.push({
          webTitle: value.webTitle, webUrl: value.webUrl
        });
      }
      console.log(this.articleListarray);
      return this.articleListarray;
    });
  };
exports.GuardianRequest = GuardianRequest;
})(this);
