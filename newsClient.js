const axios = require("axios");
const apiKey = require("./apiKey");

class NewsClient {
  loadData(callback) {
    axios
      .get(`https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`)
      .then((resp) => {
        console.log(resp.data)
        callback(resp.data);
      });
  }
}

module.exports = NewsClient;
