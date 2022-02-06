document.addEventListener("DOMContentLoaded", () => {
  news = new News();

  news.getHeadLines();
  window.addEventListener("hashchange", news.showArticleSummary);
});
