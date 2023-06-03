class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    document.querySelector("#header").innerHTML = "Headlines";
  }

  showArticles() {
    this.model.fetchArticles().then(() => {
      const articles = this.model.articles;
      articles.forEach((article) => {
        const div = document.createElement("div");
        div.className = "article";
        const p = document.createElement("p");
        const a = document.createElement("a");
        a.href = article.url;
        a.innerText = article.title;
        a.target = "_blank"
        p.append(a);
        div.append(p);
        this.mainContainerEl.append(div);
      });
    });
  }
}

module.exports = NewsView;
