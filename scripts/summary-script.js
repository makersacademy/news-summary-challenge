'use strict';

(function(exports) {
  function DisplaySummary(articleLink, headline, date, image) {
    this.url =  `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleLink}`
    this.headline = headline
    this.date = date
    this.image = image
      }

   DisplaySummary.prototype.getSummary = function() {
     document.headline = this.headline
     document.date = this.date
     document.image = this.image

     var requestSummary = new XMLHttpRequest()

     requestSummary.open('GET', this.url, true);

     requestSummary.onload = function() {
       var data = JSON.parse(this.response).text

       var summaryView = new SummaryView(data)
       var element = document.getElementById('content')
       element.innerHTML = summaryView.returnSummary()

       var title = document.getElementById('headline')
       title.innerHTML = document.headline

       var date = document.getElementById('date')
       date.innerHTML = document.date

       var image = document.getElementById('image')
       image.innerHTML = document.image

       document.getElementById("back").addEventListener("click", function(clickEvent) {
         clickEvent.preventDefault()
         window.location.href = "http://localhost:8080/";
       });
      }

     requestSummary.send()
}

  exports.DisplaySummary = DisplaySummary
})(this)
