class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
  }

  setArticles(callback) {
    this.api.loadArticles((articles) => {
      this.model.setArticles(articles);
      callback();
    })
  }

  displayArticles() {
    const articles = this.model.articles;
    const main = document.querySelector('#main');
    for (let article of articles) {
      let articleContainer = document.createElement('div');
      articleContainer.className = "article";

      let img = document.createElement('img');
      img.src = article.fields.thumbnail;

      let headline = document.createElement('h2');
      headline.innerText = article.fields.headline;
      headline.style.cursor = "pointer";

      let hiddenContent = document.createElement('div');
      hiddenContent.setAttribute("hidden", "");
      hiddenContent.className = "hidden";

      let summary = document.createElement('p')
      summary.innerHTML = article.fields.trailText;

      let link = document.createElement('a');
      link.innerText = "Go to Guardian full article";
      link.href = article.webUrl;

      hiddenContent.append(summary, link)

      articleContainer.append(img, headline, hiddenContent);
      main.append(articleContainer);
    }
    this.setHeadlinesClickEvent();
  }

  setHeadlinesClickEvent() {
    const headlines = document.querySelectorAll('main .article h2');
    headlines.forEach((headline) => {
      headline.addEventListener('click', () => {
        const div = headline.nextSibling;
        div.toggleAttribute("hidden");
      })
    })
  }

  clearArticles() {

  }
}

module.exports = ArticlesView;