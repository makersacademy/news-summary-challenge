function ConstructAylienUrl() {this.aylienUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=";};

ConstructAylienUrl.prototype.getUrl = function (url) {
  this.aylienUrl += url;
  return this.aylienUrl;
};
