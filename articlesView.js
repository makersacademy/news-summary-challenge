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
    // Get all articles loaded into the model
    const articles = this.model.getArticles();

    articles.forEach(article => {

      // Create elements for the article div, link offsite and image
      const articleElement = document.createElement('div');
      const linkElement = document.createElement('a')
      const img = document.createElement('img');

      // Sets article headline as link
      // Sets image as image url from JSON response
      linkElement.innerHTML = article[1]
      linkElement.setAttribute('href', article[0])
      img.src = article[2];
    
      // Adds each element to the main page
      this.mainContainerEl.append(articleElement);
      articleElement.appendChild(img);
      articleElement.appendChild(linkElement);
    })
  }

  getArticlesFromApi(){
    // Calls method from Client to get most recent articles
    return this.client.loadArticles()
      .then((articles) => {
        // When promise is resolved the needed elements are extracted
        // by setArticles and stored in the model
        this.model.setArticles(articles);
        // Display articles is then called to publish on site
        this.displayArticles();
      })
  }
}

module.exports = ArticlesView;