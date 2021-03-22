class NewsApi {

  getLatestNews(callback) {
    let baseUrl = "https://content.guardianapis.com/search?";
    let query = "show-fields=standfirst,thumbnail";
    let apiKey = "&YOUR_API_KEY_HERE";

    fetch(baseUrl + query + apiKey)
      .then(data => {
        data.json().then(responseBody => {
          callback(responseBody.response.results);
        })
      }).catch(error => {
        console.log("Could not get response from API");
      });
  }
}
