class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    document.querySelector("#header").innerHTML = "Headlines"
  }

  showArticles() {
    this.model.fetchArticles().then(() => {
      const articles = this.model.articles;

      articles.forEach((article) => {
        const div = document.createElement("div");
        div.className = "article";
        const p = document.createElement("p");
        p.textContent = article.title;
        // a = document.createElement("a");
        // a.href = article.url;
        // a.innerHTML = article.title;
        // div.append(a);
        div.append(p);
        this.mainContainerEl.append(div);
      });
    });
  }
}

module.exports = NewsView;
