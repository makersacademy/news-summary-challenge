(function(exports) {
  function Api() {
    this.data = []
  }
  Api.prototype.fetchData = function() {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        console.log(xhr)
        var request = JSON.parse(xhr.response);
        console.log(request.response.results);
        self.data = request.response.results;
      };
      xhr.open('GET', "https://content.guardianapis.com/search\?section=politics\&show-fields=headline,thumbnail,short-url\&api-key\=4d434884-a275-4c0b-ab5a-2e95fb1f6607");
      xhr.send();
    },
    exports.Api = Api;
})(this);
