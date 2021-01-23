function getArticles() {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all')
    .then(
      function(response) {
        response.json().then(function(data) {
          data.response.results.forEach(function(result) {
            // console.log(data)
            // console.log(data.response)
            // console.log(data.response.results)
            // console.log(data.response.results[0])
            let articlesDiv = document.getElementById("article-list")
            articlesDiv.insertAdjacentHTML('beforeend', `<img src="${result.fields.thumbnail}">`)
            articlesDiv.insertAdjacentHTML('beforeend', `<p>${result.webTitle}</p><br>`)
          })
        });
      })
}
getArticles()
