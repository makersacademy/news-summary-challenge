const axios = require("axios");
const apiKey = require("./apiKey");

class NewsClient {
  loadData() {
    axios
      .get(`https://content.guardianapis.com/search?api-key=${apiKey}`)
      .then((resp) => {
        console.log(resp.data);
      });
  }
}

module.exports = NewsClient;
