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
      let articleEl = document.createElement('div');
      articleEl.className = 'article';
      let articleElTitle = this.#createTitleWithHref(article.webTitle, article.webUrl);
      let articleElIMG = this.#createImgWithSrc(article.fields.thumbnail);
      
      articleEl.append(articleElTitle, articleElIMG)
      this.mainContainerEl.append(articleEl);
    });
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
}

module.exports = ArticlesView;