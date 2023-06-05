const axios = require("axios");
const apiKey = require("./apiKey");

class NewsClient {
  loadData(callback) {
    axios
        .get(`http://content.guardianapis.com/search?&api-key=${apiKey}&show-fields=thumbnail`)
      .then((resp) => {
        // console.log(resp.data)
        callback(resp.data);
      });
  }

  loadSearchData(searchQuery, callback) {
    axios
      .get(`http://content.guardianapis.com/search?q=${searchQuery}&format=json&from-date=2010-01-01&order-by=relevance&show-blocks=all&api-key=${apiKey}&show-fields=thumbnail`)
    .then((resp) => {
        // console.log(resp.data)
        callback(resp.data);
      });
  }
}

module.exports = NewsClient;
