const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=technology'
class NewsApi {

  retrieveNewsData(callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
  };
}

module.exports = NewsApi;


