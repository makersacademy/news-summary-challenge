function initialize() {
  newsList = new NewsList();
  newsList.getNewsList();
  console.log(newsList.newsArray)
}

document.addEventListener("DOMContentLoaded", initialize);