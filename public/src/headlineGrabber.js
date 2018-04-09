(function(exports) {
  function headlineGrabber(headlines = null) {
    this._headlines = headlines;
  }

  headlineGrabber.prototype.makeRequest = function(url) {
    return new Promise(function(resolve, reject) {
      var newRequest = new XMLHttpRequest();
      newRequest.open("GET", url, true)
      newRequest.send();
      newRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = newRequest.response
          var jsonText = JSON.parse(response);
          this._headlines = jsonText.response.editorsPicks;
          console.log(this._headlines)
          resolve(this._headlines);
        }
      }
    })
  };

  exports.headlineGrabber = headlineGrabber;
})(this);
