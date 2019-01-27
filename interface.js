function initialize () {

  articleList = new ArticleList();
  articleList.getArticleList();
  console.log(articleList.articles);

}

document.addEventListener("DOMContentLoaded", initialize);
