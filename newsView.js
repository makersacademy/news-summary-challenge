class NewsView {

  constructor(model, api){
    this.model = model
    this.api = api
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.searchFieldEl = document.querySelector('#search-field');
    this.searchButtonEl = document.querySelector('#search-button');

    this.searchButtonEl.addEventListener("click", () => {
      this.retrieveArticles();
    })
  }

  displayArticles = () => {

    this.mainContainerEl.innerHTML = "";
    this.model.getArticle().forEach((article) => {
      const imageEl = document.createElement("img");
      const headlineEl = document.createElement('h3');
      const a = document.createElement('a');
      
      imageEl.setAttribute("id", "image");
      headlineEl.setAttribute("id", "article");
      a.setAttribute("href", article.webUrl)

      imageEl.src = article.fields.thumbnail;
      headlineEl.innerText = article.webTitle;

      a.appendChild(headlineEl);
      this.mainContainerEl.append(a);
      this.mainContainerEl.append(imageEl);
    })
  }

  retrieveArticles = () => {
    this.model.clear();
    this.api.loadArticles((response) => {
      response.response.results.forEach((element) => {
        this.model.setArticle(element);     
      })
      this.displayArticles()
    }, this.searchFieldEl.value);  
  }
}

module.exports = NewsView;