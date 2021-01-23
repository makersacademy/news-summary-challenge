function getArticle() {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=football')
    .then(
      function(response) {
        response.json().then(function(data) {
          data.response.results.forEach(function(result) {
            let articlesDiv = document.getElementById("article-list")
            articlesDiv.insertAdjacentHTML('beforeend', `<p>${result.webTitle}</p>`)
          })
        });
      })
}
getArticle()
