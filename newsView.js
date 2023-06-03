class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  showArticles() {
    this.model.fetchArticles().then(() => {
      const articles = this.model.articles;

      articles.forEach((article) => {
        const div = document.createElement("div");
        div.className = "article";
        const p = document.createElement("p");
        p.textContent = article.title;
        div.append(p);
        this.mainContainerEl.append(div);
      });
    });
  }
}

module.exports = NewsView;

// articles.forEach((object) => {
//   const div = document.createElement("div");
//   div.className = "article";
//   div.textContent = object.webTitle;
//   this.mainContainerEl.append(div);
//   console.log(object.webTitle);
// })
