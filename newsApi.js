const dotenv = require('dotenv')
dotenv.config()

class NewsApi {  
  loadNews(callback) {
    const apiKey = env.API_KEY
    fetch(`https://content.guardianapis.com/search?page=1&q=debate&api-key=${apiKey}`)
    .then(responseAnswer => responseAnswer.json())
    .then(data => {callback(data)})
    .catch((error) => {console.error('ERROR', error)})
  }

}

module.exports = NewsApi;