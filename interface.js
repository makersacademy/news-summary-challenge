window.onload = () => {
  let news = new News
  news.getHeadlines()
  let articles =  news.displayHeadlines()
  let h1 = document.getElementById('page_title')
  h1.innerText = "News Headlines Page"
  let div = document.getElementById('headlines')
  div.appendChild(articles)
};
