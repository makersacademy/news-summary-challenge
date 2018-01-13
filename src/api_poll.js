(function(exports){
  function apiRequest(url, callback){
    var getter = new XMLHttpRequest();
    getter.onreadystatechange = function(){
      if(getter.readyState === XMLHttpRequest.DONE){
        if(getter.status === 200){
          callback(getter.responseText)
        } else {
          console.log("Page Not Found")
        }
      }
    }
    getter.open("GET", url, true);
    getter.send();
  }

  exports.apiRequest = apiRequest;
})(this);
