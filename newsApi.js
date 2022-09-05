// require('dotenv').config()
// import { API_KEY } from 'env';

class NewsApi {
  loadSummaries(callback) {
    fetch(`https://content.guardianapis.com/search?api-key=e3a72dc4-399d-43f2-a749-2637ab119442&show-fields=thumbnail`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      callback(data)
    })
    // .catch((error) => {
    //   console.log(error)
    //   errorCb(error)
    // })
  }
}
module.exports = NewsApi;