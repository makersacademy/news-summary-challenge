(function(){
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/help";

  xhr.open("GET", url, true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);
  function processRequest(e) {
    displayNews(xhr);
  }
})();


function displayNews(xhr) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);
    var results = data.response.results;
    for (let index = 0; index < results.length; index++) {
      document.getElementById('news').innerHTML += `<div>${results[index].webTitle}</div>`
    }
  }
}