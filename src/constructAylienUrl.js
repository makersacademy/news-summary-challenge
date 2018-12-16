function ConstructAylienUrl() {this.aylienUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="};

ConstructAylienUrl.prototype.getUrl = function (url) {
  this.aylienUrl += url;
  return this.aylienUrl;
};
