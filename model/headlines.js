function Headlines(url) {
  this.url = url
  this.headlines = []
};

Headlines.prototype.getHeadlines = function() {
  var request = new XMLHttpRequest();
  var response
  var headlines = []
  request.onload = function() {
    var response = JSON.parse(request.response);
    console.log(response.response.results)
    for(i = 0; i < response.response.results.length; i++) {
      headlines.push(response.response.results[i])
    };
  };
  request.open("GET", this.url, true);
  request.send();
  this.addNewHeadlines(headlines);
};

Headlines.prototype.addNewHeadlines = function(headlines) {
  this.headlines = headlines
};

Headlines.prototype.printHeadlines = function() {
  for(i = 0; i < this.headlines.length; i++) {
    console.log(this.headlines[i].webTitle);
  };
};
