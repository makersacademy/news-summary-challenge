class NewsClient {
   loadArticles(callback) {
    fetch('https://content.guardianapis.com/search?page=1')
          .then(response => response.json())
          .then(response => {callback(response)})
          .catch((error) => {displayError(error)})
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