class ArticlesView {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");
    this.articlesContainerEl = document.querySelector("#articles-container");
  }

  displayArticles = (articles) => {
    if (articles.length % 2 != 0) articles.pop();
    for (let i = 0; i < articles.length; i += 2) {
      const rowEl = document.createElement("div");
      rowEl.className = "row";
      rowEl.append(this.getArticleColumnDiv(articles[i]));
      rowEl.append(this.getArticleColumnDiv(articles[i + 1]));
      this.articlesContainerEl.append(rowEl);
    }
  };

  getArticleColumnDiv = (article) => {
    const columnEl = document.createElement("div");
    columnEl.className = "col-sm-6";
    columnEl.append(this.getTitleElWithLink(article.title, article.url));
    columnEl.append(this.getDateEl(article.published_date));
    columnEl.append(this.getBylineEl(article.byline));
    columnEl.append(this.getImageEl(article.multimedia[0].url));
    columnEl.append(this.getAbstractEl(article.abstract));
    return columnEl;
  };

  getTitleElWithLink(title, url) {
    const titleEl = document.createElement("h3");
    const linkEl = document.createElement("a");
    linkEl.textContent = title;
    linkEl.href = url;
    titleEl.append(linkEl);
    return titleEl;
  }

  getImageEl(url) {
    const imageEl = document.createElement("img");
    imageEl.src = url;
    imageEl.style.width = "200px";
    return imageEl;
  }

  getBylineEl(byline) {
    const bylineEl = document.createElement("p");
    bylineEl.textContent = byline;
    return bylineEl;
  }

  getDateEl(date) {
    const dateEl = document.createElement("p");
    dateEl.textContent = date;
    return dateEl;
  }

  getAbstractEl(abstract) {
    const abstractEl = document.createElement("p");
    abstractEl.textContent = abstract;
    return abstractEl;
  }
}

module.exports = ArticlesView;
