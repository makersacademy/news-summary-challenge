function requestToAylienApi(url) {
    domain = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
    query = domain + url;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var responseObject = JSON.parse(this.responseText);
        console.log(responseObject);
        getStorySummary(responseObject);
      }
    };
    xhttp.open("GET", query, true);
    xhttp.send();
}

function getStorySummary(responseObject) {
   var sentenceArray = responseObject.sentences
   var storySummaryModel = new StorySummaryModel();
   storySummaryModel.addStorySummary(sentenceArray);
   var storySummaryView = new StorySummaryView(storySummaryModel)
   storySummaryView.displayStorySummary();
 };
