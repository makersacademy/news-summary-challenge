document.addEventListener("DOMContentLoaded", () => {
  const news = new News()

  news.showNews()
  document.querySelector('#newssummary1').innerText = news.showNews
})