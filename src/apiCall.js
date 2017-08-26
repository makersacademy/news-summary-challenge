(function(exports) {
  function ApiCall(url, headlineList) {
    this.url = url;
    this.response = "";
    this.headlineList = headlineList;
}

ApiCall.prototype.makeCall = function() {
  var xhr = new XMLHttpRequest();

  var self = this;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var content = JSON.parse(xhr.responseText);
      self.response = content.response.results;
      self.headlineList.addHeadlines(self.response);
      return self.response;
    }
  }
  xhr.open("GET", this.url, false);
  xhr.send();
}


exports.ApiCall = ApiCall;
})(this);
