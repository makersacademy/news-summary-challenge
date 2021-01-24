function guardianAPI() {
  this.results = [];
}

guardianAPI.prototype.makeRequest = function(url) {
  var result = new XMLHttpRequest();
  result.open( "GET", url, false ); // false for synchronous request
  result.send();
  data = JSON.parse(result.responseText);
  data.response.results.forEach( i => {
    this.results.push(i.fields)
  })
  return this.results
}

