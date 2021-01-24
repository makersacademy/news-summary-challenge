const articles = []

window.onload = function() {
  getHeadlines()
}

window.addEventListener("hashchange", function(){
  let id = window.location.hash.split("#")[1];
  displayArticle(articles[id]);
})

function displayArticle(article) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  // getSummary(article, "modal-text")
  var body = article.webTitle
  document.getElementById("modal-text").innerHTML = body.link(article.webUrl)
  document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
    history.replaceState(null, null, ' ');
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      history.replaceState(null, null, ' ');
    }
  }
}

function getHeadlines() {
  fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=world&show-elements=image`, {
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

function getSummary(article, element) {
  fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article.webUrl}language=english`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    response.json().then(function(data) {
      document.getElementById(element).innerHTML = data.sentences
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