"use-strict";

function guardianAPI() {
}

guardianAPI.prototype.makeRequest = function(url) {
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send();
    data = JSON.parse(xmlHttp.responseText);
    return data.response.results
}
