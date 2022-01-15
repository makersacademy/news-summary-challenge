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

      let articleElTitle = document.createElement('h2')

      let link = document.createElement('a')
      let linkText = document.createTextNode(article.webTitle)
      link.appendChild(linkText)
      link.href = article.webUrl
      
      articleElTitle.appendChild(link)

      let articleElIMG = document.createElement('img')
      articleElIMG.src = article.fields.thumbnail
      
      articleEl.append(articleElTitle, articleElIMG)
      this.mainContainerEl.append(articleEl);
    })
  }

}

module.exports = ArticlesView;