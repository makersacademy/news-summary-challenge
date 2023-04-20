import Guardian from './node_modules/guardian-js';

class NewsClient {

  loadArticles(callback) {
    console.log("LOADING ARTICLES")
    const api = new Guardian('883024d4-b7ae-40f2-a680-9684ed4072fe', true)
    api.content.search('uk')
    .then(response => callback(response.results))
  }

    loadArticlesByTopic(searchQuery, callback) {
        fetch(`https://content.guardianapis.com/search?${searchQuery}`)
          .then(response => response.json())
          .then(response => {callback(response)})
          .catch((error) => {displayError(error)})
        // I've not tested this but I think it will function with 
        // a bit of debugging
    }
  }


module.exports = NewsClient;