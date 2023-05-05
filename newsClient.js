const Key = require('./keys')

class NewsClient{
  constructor() {
    this.API_KEY = Key.reveal()
  }

  loadArticles = (search_terms=null) => {
    return fetch(`https://content.guardianapis.com/search?${"q=" + search_terms + "&"}api-key=${this.API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error (`HTTP error! Status: ${response.status}`)} 
      return response.json()
    })
    .catch(error => {
      if (error instanceof TypeError) {
        throw new Error (`Connection error. Check your internet connection.`)
      } else {
        throw error;
      }
    })
  }
}

module.exports = NewsClient


