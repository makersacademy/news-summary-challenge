// runs on page load

articleList = new ArticleList;

refreshArticleList()


function refreshArticleList() {
  articleList.getArticlesFromAPI(displayArticleList,'saved_response.json');
}

function displayArticleList() {
  document.getElementById('article-list').innerHTML = articleList.outputArticles()
}
