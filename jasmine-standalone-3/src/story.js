function Story(title, url) {

  this.url = url;
  this.title = title;

  this.add_summary = function() {
    var request = new XMLHttpRequest();
    request.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + this.url , true);
    request.onload = function () {
      var result = JSON.parse(this.response);
      summary.text = this.text;
      summary.emit('update');
    }
    request.send();
  }

  summary.on('update', function () {
    return summary.text ; // HOORAY! THIS WORKS!
  });

  this.summary = function() {
    return summary;
  }

}
