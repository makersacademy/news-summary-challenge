class NewsApi {  
  loadNews(callback) {
    fetch('https://content.guardianapis.com/search?page=1&api-key=98e51f22-b91b-4a89-b784-aa14c541dfed&show-fields=thumbnail,body')
    .then(responseAnswer => responseAnswer.json())
    .then(data => {callback(data)})
    .catch((error) => {console.error('ERROR', error)})
  }

}

module.exports = NewsApi;