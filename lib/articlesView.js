class ArticlesView {
  constructor(modelClass) {
    this.modelClass = modelClass;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayHeadlines = () => {
    document.querySelectorAll('.article').forEach((element) => {
      element.remove();
    });

    this.modelClass.getArticles().forEach((article) => {
      const articleEl = this.#createArticleDivWithTitleAndImg(article);
      const articleElSummaryButton = this.#createSummaryButton(article.id);

      articleEl.append(articleElSummaryButton);
      this.mainContainerEl.append(articleEl);
    });
  };

  displaySingleArticle = (article) => {
    const articleEl = this.#createArticleDivWithTitleAndImg(article);
    this.mainContainerEl.innerHTML = `<div class='article'>${articleEl.innerHTML}</div>`;
  };

  #createArticleDivWithTitleAndImg = (article) => {
    const articleEl = document.createElement('div');
    articleEl.className = 'article';
    const articleElTitle = this.#createTitleWithHref(article.webTitle, article.webUrl);
    const articleElIMG = this.#createImgWithSrc(article.fields.thumbnail);
    articleEl.append(articleElTitle, articleElIMG);

    return articleEl;
  };

  #createTitleWithHref = (articleTitle, articleUrl) => {
    const title = document.createElement('h2');
    const link = document.createElement('a');
    const linkText = document.createTextNode(articleTitle);
    link.appendChild(linkText);
    link.href = articleUrl;
    title.appendChild(link);

    return title;
  };

  #createImgWithSrc = (articleIMG) => {
    const img = document.createElement('img');
    img.src = articleIMG;
    return img;
  };

  #createSummaryButton = (articleId) => {
    const button = document.createElement('button');
    button.textContent = 'Summary';
    const link = document.createElement('a');
    link.href = `#${articleId}`;
    link.appendChild(button);

    return link;
  };
}

module.exports = ArticlesView;
