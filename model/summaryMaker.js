(function(exports) {
  function SummaryMaker() {
    this.summaryKey = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
  };

  SummaryMaker.prototype.getSummary = function(url) {
    var anotherRequest = new XMLHttpRequest();
    anotherRequest.open("GET", this.summaryKey+`${url}`, false);
    anotherRequest.send();
    var summaryObject = JSON.parse(anotherRequest.response);
    this.sentences = summaryObject.sentences;
    return this.sentences
  };

  SummaryMaker.prototype.createSummary = function(){
    summary = "<p id='summary'>"
    this.sentences.forEach(function(sentence) {
      summary += sentence + " "
    });
    summary +="</p>"
    this.summary = summary;
  };

  exports.SummaryMaker = SummaryMaker;

})(this);
