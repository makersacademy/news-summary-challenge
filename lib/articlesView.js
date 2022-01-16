class ArticlesView {
  constructor(modelClass){
    this.modelClass = modelClass;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayHeadlines = () => {
    document.querySelectorAll('.article').forEach(element => {
      element.remove();
    });

    this.modelClass.getArticles().forEach(article => {
      this.#createHeadlineArticleDiv(article)
    });
  }

  displaySingleArticle = (article) => {
    const articleEl = document.createElement('div');
    articleEl.className = 'article';
    const articleElTitle = this.#createTitleWithHref(article.webTitle, article.webUrl);
    const articleElIMG = this.#createImgWithSrc(article.fields.thumbnail);
    articleEl.append(articleElTitle, articleElIMG);

    this.mainContainerEl.innerHTML = `<div class='article'>${articleEl.innerHTML}</div>`;  
  }

  #createHeadlineArticleDiv = (article) => {
    const articleEl = document.createElement('div');
    articleEl.className = 'article';
    const articleElTitle = this.#createTitleWithHref(article.webTitle, article.webUrl);
    const articleElIMG = this.#createImgWithSrc(article.fields.thumbnail);
    const articleElSummaryButton = this.#createSummaryButton(article.id)
    
    articleEl.append(articleElTitle, articleElIMG, articleElSummaryButton);
    this.mainContainerEl.append(articleEl);   
  }

  #createTitleWithHref = (articleTitle, articleUrl) => {
    let title = document.createElement('h2');
    let link = document.createElement('a');
    let linkText = document.createTextNode(articleTitle);
    link.appendChild(linkText);
    link.href = articleUrl;
    title.appendChild(link);
    
    return title;
  } 

  #createImgWithSrc = (articleIMG) => {
    let img = document.createElement('img');
    img.src = articleIMG;
    return img;
  }

  #createSummaryButton = (articleId) => {
    let button = document.createElement('button');
    button.textContent = 'Summary';
    let link = document.createElement('a');
    link.href = `#${articleId}`;
    link.appendChild(button)

    return link
  }
}

module.exports = ArticlesView;