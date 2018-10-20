'use strict';

(function(exports) {
  function DisplaySummary(articleLink, headline) {
    this.url =  `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleLink}`
    this.headline = headline
      }

   DisplaySummary.prototype.getSummary = function() {
     document.headline = this.headline
     var requestSummary = new XMLHttpRequest()
     requestSummary.open('GET', this.url, true);
     requestSummary.onload = function() {
       var apiText = JSON.parse(this.response)
       var data = apiText.text
       var summaryView = new SummaryView(data)
       var element = document.getElementById('content')
         element.innerHTML = summaryView.returnSummary()
         var title = document.getElementById('headline')
          title.innerHTML = document.headline
         document.getElementById("back").addEventListener("click", function() {
           window.location.href = "http://localhost:8080/";
         });
      }
     requestSummary.send()
}

  exports.DisplaySummary = DisplaySummary
})(this)
