window.onload = () => {
  let news = new News
  news.getHeadlines()
  let articles =  news.displayHeadlines()
  let div = document.getElementById('headlines')
  div.appendChild(articles)
};
