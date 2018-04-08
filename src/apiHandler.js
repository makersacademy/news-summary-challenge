(function(exports) {
  const apiHandler = {
    get: function(request,
      callback,
      apiPrefix= "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=",
      requester=new XMLHttpRequest)
      {
      var xhttp = requester;
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              return callback(JSON.parse(this.responseText));
         }
      };
      xhttp.open("GET", apiPrefix + request, true);
      xhttp.send();
    }
  };
  exports.apiHandler = apiHandler;
})(this);
