(function(exports) {
  function ApiCall(url, headlineList) {
    this.url = url;
    this.response = "";
    this.headlineList = headlineList;
}

ApiCall.prototype.makeCall = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", this.url, false);
  xhr.send();
  var self = this;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var content = JSON.parse(xhr.responseText);
      self.response = content.response.results;
      return self.response;
      self.headlineList.addHeadlines(self.response);
    }
  }
}


exports.ApiCall = ApiCall;
})(this);
