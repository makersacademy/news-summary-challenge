
(function(exports) {
  function NewsGrabber(site = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body") {
    this.targetSite= site;
    this.apiCallRecorded = null;
    this.parsedCall = null;
  }

  NewsGrabber.prototype.apiCallRecord = function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', this.targetSite, true);

    xhr.responseType = 'text';

    xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
        }
    }
    };

    xhr.send(null);
    return this.apiCallRecorded = xhr
  };

NewsGrabber.prototype.parseCall = function (){
    this.parsedCall = JSON.parse(this.apiCallRecorded.responseText)
    return this.parsedCall
}

NewsGrabber.prototype.headlines = function(){
  var data = this.parsedCall
  var headlinesArray = []
  for (i = 0; i < data.response.results.length; i++) {
    individualTitle = data.response.results[i].webTitle;
    headlinesArray.push(individualTitle)
  }
  return headlinesArray
}

NewsGrabber.prototype.bodySnatcher = function(){
  var data = this.parsedCall
  var bodyBag = []
  for (i = 0; i < data.response.results.length; i++) {
    individualBody = data.response.results[i].fields.body;
    bodyBag.push(individualBody)
  }
  return bodyBag
}

NewsGrabber.prototype.urlGrabber = function(){
  var data = this.parsedCall
  var urlArray = []
  for (i = 0; i < data.response.results.length; i++) {
    individualURL = data.response.results[i].webUrl;
    urlArray.push(individualURL)
  }
  return urlArray
}



  exports.NewsGrabber = NewsGrabber;
})(this);
