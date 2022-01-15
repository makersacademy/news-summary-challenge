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

      let articleElPara = document.createElement('h2')
      articleElPara.textContent = article.webTitle;
      articleElPara.className = 'article-title';

      let articleElIMG = document.createElement('img')
      articleElIMG.src = article.fields.thumbnail
      
      articleEl.append(articleElPara)
      articleEl.append(articleElIMG)
      this.mainContainerEl.append(articleEl);
    })
  }

}

module.exports = ArticlesView;