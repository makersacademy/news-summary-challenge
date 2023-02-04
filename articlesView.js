class ArticlesView{
  constructor(model, client){
    this.model = model;
    this.client = client;
    // Select main container, search button
    this.mainContainerEl = document.querySelector('#main-container');
    this.searchButtonEl = document.querySelector('#search-button');
    // Search params
    this.searchParam = document.querySelector('#search-param')
    this.fromDateSearch = document.querySelector('#fromDate-input')
    this.toDateSearch = document.querySelector('#toDate-input')
  }

  displayArticles(){
    const articles = this.model.getArticles();

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.innerText = article[1];
      const img = document.createElement('img');
      img.src = article[2];
      this.mainContainerEl.appendChild(img);
      this.mainContainerEl.append(articleElement);
    })
  }

  getArticlesFromApi(){
    return this.client.loadArticles()
      .then((articles) => {
        console.log(articles)
        this.model.setArticles(articles);
        this.displayArticles();
      })
  }
}

module.exports = ArticlesView;