(function(exports){
  function ApiRequester(){
  }

  ApiRequester.prototype = {
    getData: function(url){
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          return JSON.parse(this.responseText);
        }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
    }
  };

  exports.ApiRequester = ApiRequester;
})(this);
