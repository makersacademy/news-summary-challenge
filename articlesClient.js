// API Key stored in gitignore
const apiKey = require('./config')

class ArticlesClient{
  // Loads the 10 most recent articles
  loadArticles(){
    return fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey.apiKey}`)
      .then((response) => response.json())
      .then((articles) => {return articles})
  }
  // Takes a search term and returns related articles
  searchArticles(searchTerm){
    return fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey.apiKey}`)
    .then((response) => response.json())
    .then((articles) =>  {return articles})
  }
}

module.exports = ArticlesClient;


// Potential http request to include two dates
// `https://content.guardianapis.com/search?from-date=${fromDate}&to-date=${toDate}&q=${word}&api-key=${apiKey.apiKey}`