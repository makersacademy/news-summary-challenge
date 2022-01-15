class ArticlesView {
  constructor(modelClass){
    this.modelClass = modelClass;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles = () => {
    document.querySelectorAll('.article').forEach(element => {
      element.remove();
    });

    this.modelClass.getArticles().forEach(article => {
      let articleEl = document.createElement('div');
      articleEl.textContent = article;
      articleEl.className = 'article';
      this.mainContainerEl.append(articleEl);
    })
  }

}

module.exports = ArticlesView;