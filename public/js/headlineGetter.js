var articles;
var response = fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics");
var articlesReady = response.then(function(response) {
  return response.json();
})
.then(function(json) {
  articles = json.response.results;
});

var articleHash = {};
articlesReady.then(() => {
  var headlines = document.getElementById("headlines");
  var id = 0;
  articles.forEach((article) => {
    id += 1;
    articleHash[id] = article;
    var html = `<div><a href="#articles/${id}">${article.webTitle}</a></div>`;
    headlines.innerHTML += html;
  });
});

window.addEventListener("hashchange", () => {
  var id = window.location.hash.split("/")[1];
  var article = articleHash[id];
  var articleDiv = document.getElementById("article");
  var promise = fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article.webUrl}`)
  console.log(promise);
  promise.then((response) => {
    return response.json();
  })
  .then((json) => {
    articleDiv.innerHTML = json.text;
  });
});
