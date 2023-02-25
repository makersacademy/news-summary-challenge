class ArticlesView{
  constructor(model, client){
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.searchButtonEl = document.querySelector('#search-button');
    
    console.log(this.searchButtonEl)

    this.searchButtonEl.addEventListener('click', () => {
      this.searchTerm = document.querySelector('#search-term').value
      console.log(this.searchTerm)
      this.searchArticles(this.searchTerm)
      document.getElementById('search-term').value = ""
    })
  }

  displayArticles(){
    const existingArticles = document.querySelectorAll('.article-div')
    existingArticles.forEach((element) => {
      element.remove();
    })

    // Get all articles loaded into the model
    const articles = this.model.getArticles();
    articles.forEach(article => {
      // Create elements for the article div, link offsite and image
      const articleElement = document.createElement('div');
      const linkElement = document.createElement('a');
      const img = document.createElement('img');

      // Sets article headline as link
      // Sets image as image url from JSON response
      articleElement.className = 'article-div'
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

  searchArticles(searchTerm){
    console.log('search Articles called')
    return this.client.searchArticles(searchTerm)
      .then((articles) => {
        this.model.resetArticles()
        this.model.setArticles(articles);
        this.displayArticles();
        console.log(this.model.getArticles())
      })
    }
}

module.exports = ArticlesView;