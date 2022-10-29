class NewsView {
  constructor(view) {
    this.view = view;
  }

  displayNews() {
    this.view.loadNews((news) => {
      console.log('news', news);
      news.response.results.forEach((individualNews) => {
        console.log('individualNews: ', individualNews);
        console.log('individual news title', individualNews.webTitle);
        var newsEl = document.createElement('div');
        newsEl.className = 'news';

        var title = document.createElement('h1');
        title.textContent = individualNews.webTitle;

        newsEl.appendChild(title);
        document.body.append(newsEl);
      });
    });
  }
}

module.exports = NewsView;
