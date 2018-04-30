// runs on page load

articleList = new ArticleList;

refreshArticleListAS()

// Handles a promise (works with either version in articleList-model.js)
function refreshArticleList() {
  articleList.fetchArticlesFromAPI().then(function (response) {
    console.log("success");
    response.response.results.forEach(element => {
      var url = element.webUrl;
      var headline = element.webTitle;
      var date = element.webPublicationDate;
      articleList.addArticle(new Article(url, headline, date))
    });
    document.getElementById('article-list').innerHTML = articleList.outputArticles();
  }, function (error) {
    console.log("failure");
  })
}

// New async fetch function does everything in a single function
async function refreshArticleListAS() {
  source = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology'
  let response = await fetch(source);
  let data = await response.json();
  data.response.results.forEach(element => {
    var url = element.webUrl;
    var headline = element.webTitle;
    var date = element.webPublicationDate;
    articleList.addArticle(new Article(url, headline, date))
  });
  document.getElementById('article-list').innerHTML = articleList.outputArticles();
}

async function refreshArticleListAS() {
  let response = await fetch('API_url');
  let data = await response.json();
  // handle response
}