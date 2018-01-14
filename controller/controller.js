"use strict";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  // my function - parse the response and create new articles from each element
  }
};
xhttp.open("GET", "API-link");
xhttp.send();
