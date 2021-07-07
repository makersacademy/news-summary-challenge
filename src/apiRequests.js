(function(exports) {
  function GetHTTP() {
  }

  GetHTTP.prototype.makeRequest = function(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  exports.GetHTTP = GetHTTP;
})(this);
