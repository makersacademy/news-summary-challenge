let api = {
  urlBase: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com",
  summaryUrlBase: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com",
  date: new Date().toISOString().slice(0, 10),

  getStories: function () {
    let url = `${this.urlBase}/search?from-date=${this.date}`
    httpGet(url, function (response) {
      let data = JSON.parse(response)
      console.log(data)
      let stories = data.response.results
      stories = stories.map(story => {
        return new Story(story.webTitle, story.id)
      })
      viewHeadlines(stories)
    })
  },

  getSummary: function (link) {
    let url = `${this.summaryUrlBase}/${link}?show-fields=body`
    httpGet(url, function (response) {
      let data = JSON.parse(response)
      let summary = data.response.content.fields.body
      viewSummary(summary)
    })
  }
}