const API_KEY = '1836ff0dabce42ce86ee463e75d05fbd'

function loadJSON(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
      } else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
}

window.onload = function() {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json?" + API_KEY;
  var data = loadJSON(url)
  document.getElementById("app").innerHTML = IndexPage().render();
}
