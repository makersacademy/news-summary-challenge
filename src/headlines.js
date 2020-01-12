(function(exports) {
  function Headlines(request) {
    this.request = request;
  }

  Headlines.prototype.individualHeadlines = function() {
    var webUrls = this.request.response.results.map(headline => headline.webUrl)
    splitUrls = webUrls.map(url => "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com" + url.split('').slice(27).join('') + "?show-fields=body")
    return splitUrls
  }

  Headlines.prototype.httpGet = function(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  exports.Headlines = Headlines;
})(this);
