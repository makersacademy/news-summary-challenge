window.onload = () => {
  let news = new Grauniad;
  news.getResults();
  news.renderHeadlines();
  const app = document.getElementById('headlines');
  app.appendChild(container);
};









