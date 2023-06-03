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
        const i = document.createElement("img");
        i.src = article.image;
        a.href = article.url;
        a.innerText = article.title;
        a.target = "_blank";
        const image_para = document.createElement("p");
        image_para.append(i);
        p.append(a);
        p.append(image_para);
        div.append(p);
        this.mainContainerEl.append(div);
      });
    });
  }
}

module.exports = NewsView;
