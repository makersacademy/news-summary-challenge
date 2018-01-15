(function () {
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
      document.getElementById('news').innerHTML +=
        `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${results[index].fields.thumbnail}">
        <div class="card-body">
          <h5 class="card-title">${results[index].webTitle}</h5>
          <p class="card-text">${results[index].fields.trailText}</p>
          <a href="${results[index].fields.shortUrl}" class="btn btn-primary">Read Full Article</a>
       </div>  
      </div>
      `
    }
  }
}