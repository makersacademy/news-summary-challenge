import Guardian from './node_modules/guardian-js';

class NewsClient {

  loadArticles(callback) {
    console.log("LOADING ARTICLES")
    const api = new Guardian('883024d4-b7ae-40f2-a680-9684ed4072fe', true)
    api.content.search('uk')
    .then(response => callback(response))
  }

    loadArticlesByTopic(searchQuery, callback) {
        fetch(`https://content.guardianapis.com/search?${searchQuery}`)
          .then(response => response.json())
          .then(response => {callback(response)})
          .catch((error) => {displayError(error)})
        //this should use searchQuery as search parameters
        // for the API call
        // I'll probably need to find a way to format the searchQuery
        // properly, before it's passed as an argument to this function
        // from the view (another method in view?)
    }
  }


module.exports = NewsClient;