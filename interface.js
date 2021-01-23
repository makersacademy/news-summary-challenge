window.onload = function() {
  getHeadlines()
}

function getHeadlines() {
  fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2021-01-23`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    response.json().then(function(data) {
      console.log(data)
      var headlinesArray = data.response.results
      displayHeadlines(headlinesArray);
    });
  })
}

function displayHeadlines(data) {
    data.forEach(function(article, index) {
    let listLink = document.createElement('a');
    let listItem = document.createElement('li');
    listLink.href = '#' + index
    listLink.id = 'article' + index
    listItem.innerHTML = article.webTitle
    listItem.appendChild(listLink)
    document.getElementById('headlines').appendChild(listItem)
  })
}