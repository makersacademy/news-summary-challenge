(function(exports) {
  function Api() {

    Api.prototype.data = function () {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET",  "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world", true);
      var ApiData = []

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText)
          ApiData.push(data.response.results)
        }
      }
      xhttp.send();
      return ApiData;
    };
  }
  exports.Api = Api;
})(this);

// console.log(getApi());
