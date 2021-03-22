function makeURLChangeShowNewsForCurrentPage() {
  window.addEventListener("hashchange", showNewsForCurrentPage);
}

function showNewsForCurrentPage() {
  showNews(getNewsID(location));
}

function getNewsID(location) {
  return parseInt(location.hash.split("#")[1]);
}

function showNews(newsID) {
  news = newsCollector.filter((article) => {
    return article.id === newsID;
  });
  document.getElementById("headlines-container").style.display = "none";
  document.getElementById("heading").style.display = "none";
  summarize(news);
}
