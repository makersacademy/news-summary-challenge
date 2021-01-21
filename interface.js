function getHeadlines() {
  const HEADLINE_REQUEST = 'https://content.guardianapis.com/search?from-date=2021-01-21&to-date=2021-01-21&api-key=test'
  fetch(HEADLINE_REQUEST).then(function(response) {
    response.json().then(function(json) {
      console.log(json.response.results); // returned as an array of hashes. Need to retrieve .webTitle
      renderHeadlines(json.response.results);
    })
  })
}

function renderHeadlines(data) {
  data.forEach(function(article, index) {
    let articleDiv = document.createElement('div');
    let id = `article${index}`
    articleDiv.id = id
    let headlineHTML = `<h1>${article.webTitle}</h1>`;
    let headlineURL = `<a href="${article.webUrl}">Link to site</a>`;
    let headlineAPI = `<p>${article.apiUrl}</p>`;
    document.getElementById('headlines').appendChild(articleDiv)
    document.getElementById(id).innerHTML = `${headlineHTML}${headlineURL}${headlineAPI}`;
  })
}
