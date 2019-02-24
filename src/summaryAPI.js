function summaryPrinter(url, i) {
  // var summaryRequest = new XMLHttpRequest();
  // summaryRequest.addEventListener("load", summaryListener);
  // summaryRequest.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url);
  // summaryRequest.send();
  // function summaryListener() {
  //   var summary = JSON.parse(this.responseText);
  //   document.getElementById(i.toString()).innerHTML += "<p class='card-body' style='display: inline-block;'>" + summary.sentences + "</p><br>";
  // }
  document.getElementById(i.toString()).innerHTML += "<p style='display: inline-block;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>";
}
