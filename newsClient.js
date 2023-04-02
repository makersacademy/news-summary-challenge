const axios = require("axios");
const apiKey = require("./apiKey");

class NewsClient {
  loadData(callback) {
    axios
      .get(`https://content.guardianapis.com/search?api-key=${apiKey}`)
      .then((resp) => {
        callback(resp.data);
      });
  }
}

module.exports = NewsClient;
