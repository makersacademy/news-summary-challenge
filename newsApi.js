const ApiKey = require('./apiKey')


class NewsApi {
  loadHeadlines(searchText, callBack,errorCallBack) {
    console.log(searchText);
    const url = `https://content.guardianapis.com/search?q=${searchText}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${ApiKey}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        callBack(data);
      })
      .catch((error) => {
        console.log('error:', error);
        errorCallBack(error);
      })
  }
}

// class NewsApi {
//   constructor(){
//     this.url = 'https://content.guardianapis.com/search?q=';
//     this.apiKey = `${ApiKey}`;
//   }

//   fetchStories(newsCallback){
//     const fullUrl = this.url + this.apiKey
//     fetch(fullUrl)
//       .then(response => response.json())
//       .then((data) => {
//         newsCallback(data);
//       })
//   }

//   setUrl(keyWord){
//     const fullUrl = this.url + keyWord + this.apiKey
//     fullUrl
//   }
// }



module.exports = NewsApi;