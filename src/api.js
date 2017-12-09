(function(exports) {
  function Api() {

    Api.prototype.data = function () {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET",  "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world", true);
      var headlines = []

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText)
          var arr = ["wow", "nice"]
          console.log(arr[0])
          sort(data);
        }
      }
        function sort(data) {
        for (i = 0; i < 10; i++) {
          headlines.push(`${data.response.results[i].webTitle}#${data.response.results[i].webUrl}`)
        }
      }

      xhttp.send();
      return headlines;
    };
  }
  exports.Api = Api;
})(this);
