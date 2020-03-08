(function(exports) {
  function ArticleSummary() {
  }

  ArticleSummary.prototype.makeRequest = function(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send();
    return JSON.parse(xmlHttp.responseText);
  }

  exports.APIData = APIData;
})(this);