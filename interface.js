const articles = []

window.onload = function() {
  getHeadlines()
}

window.addEventListener("hashchange", function(){
  let id = window.location.hash.split("#")[1];
  display(articles[id]);
})

function display(article) {
  console.log(article)
}

function getHeadlines() {
  fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=world&show-elements=image&from-date=2021-01-19`, {
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

function getImages(article) {
  fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=${article.webUrl}&best_image=true&language=english`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    response.json().then(function(data) {
      console.log(data)
      console.log(data.image)
    });
  })
}

function displayHeadlines(data) {
    data.forEach(function(article, index) {
      // getImages(article)
      articles.push(article)
      let listLink = document.createElement('a');
      let listItem = document.createElement('li');
      listLink.href = '#' + index
      listLink.id = 'article' + index
      listLink.innerHTML = article.webTitle
      listItem.appendChild(listLink)
      document.getElementById('headlines').appendChild(listItem)
  })
}