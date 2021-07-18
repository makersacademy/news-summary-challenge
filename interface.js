// interface.js
document.addEventListener("DOMContentLoaded", () => {
  const news = new News();
  document.querySelector('#news-1').innerText = news.displayNews
})
