document.addEventListener("DOMContentLoaded", () => {
  news = new News();

  news.getHeadlines();
  window.addEventListener("hashchange", news.showArticleSummary);
  
})