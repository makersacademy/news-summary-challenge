let api = {
  urlBase: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com",
  date: new Date().toISOString().slice(0, 10),

  headlines: function () {
    let url = `${this.urlBase}/search?q=from-date=${this.date}`
    httpGet(url, function (response) {
      let data = JSON.parse(response)
      let headlines = data.response.results.map(result => result.webTitle)
      viewHeadlines(headlines)
    })
  }
}
