function SummaryRequest() {
  this.url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
};

SummaryRequest.prototype.getSummary = function(website, callback) {
  var xhr = new XMLHttpRequest();
  url = this.url + website
  xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var response = JSON.parse(xhr.responseText);
    callback(response.text)
  }
  };
  xhr.open("GET", url, true);
  xhr.send(null);
};
