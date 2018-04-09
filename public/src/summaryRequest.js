function SummaryRequest() {
  this.response = []
  this.url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
};

SummaryRequest.prototype.getSummary = function(website) {
  var xhr = new XMLHttpRequest();
  url = this.url + website
  xhr.open("GET", url, false);
  xhr.send(null);
  var response = JSON.parse(xhr.responseText);
  this.response = response.text
};
