let newsFeed = new NewsFeed();

function getArticles() {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all')
    .then(
      function(response) {
        response.json().then(function(data) {
          data.response.results.forEach(function(result) {
            addArticleToNewsFeed(result)
            let articlesDiv = document.getElementById("article-list")
            articlesDiv.insertAdjacentHTML('beforeend', `<img src="${result.fields.thumbnail}">`)
            articlesDiv.insertAdjacentHTML('beforeend', `<p>${result.webTitle}</p><br`)
          })
        });
      })
}
getArticles()

function addArticleToNewsFeed(article) {
  let newArticle = new Article(`"${article.webTitle}", "${article.fields.bodyText}", "${article.id}", "${article.webUrl}"`);
  newsFeed.addNewArticle(newArticle);
}
