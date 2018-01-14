(function () {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/help";

  xhr.open("GET", url, true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);
  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      var results = data.response.results;
    }
  }
})();
