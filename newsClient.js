const apiKey = require('./apiKey');

class NotesClient {

  loadNews(callback, errorCallback) {

    fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
    )
    .then(response => response.json())
      .then(data => {
        callback(data)
      })
        .catch(error => {
          errorCallback(error)
        });
  }

  searchQueryResults(keyWord, callback, errorCallback) {
    
    const url = `https://content.guardianapis.com/search?q=${keyWord}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`

    fetch(url)
    .then(response => response.json())
      .then(data => {
        callback(data)
      })
      .catch(error => {
        errorCallback(error)
      });
  }
  
}

module.exports = NotesClient;