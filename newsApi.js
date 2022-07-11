class NewsApi {

  constructor(){
    this.api = "";
  }
  
  loadArticles = (callback, query) => {
    fetch(`https://content.guardianapis.com/search?q=${query}&api-key=${this.api}&show-fields=thumbnail`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(`Error: ${error}`));
  }
}

module.exports = NewsApi;