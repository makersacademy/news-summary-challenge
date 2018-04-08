// runs on page load

articleList = new ArticleList;

refreshArticleList()
displayArticleList()


// functions to call
function displayArticleList() {
  document.getElementById('article-list').innerHTML = articleList.outputArticles()
}

function refreshArticleList() {
  articleList.getArticlesFromAPI();
}
