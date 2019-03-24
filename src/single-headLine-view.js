(function(exports){
  function SingleHeadListView(){
  }
  SingleHeadListView.prototype.showTheArticleSummary = function(){
    window.addEventListener("hashchange", function(){
      var url = window.location.hash.split("#")[1];
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             document.getElementById("app").innerHTML = JSON.parse(xhttp.responseText).text;
          }
      };
      xhttp.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="+url, true);
      xhttp.send();
    })
  }

  this.SingleHeadListView = SingleHeadListView ;
})(this);

singleHeadListView = new SingleHeadListView();

singleHeadListView.showTheArticleSummary();
