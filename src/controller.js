
let urlBase = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com"
let summaryUrlBase = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com"
let date = new Date().toISOString().slice(0, 10)

window.onload = function () {
  getStories()
}

window.addEventListener('hashchange', function (event) {
  let link = window.location.hash.substr(9);
  getSummary(link)
}, false)

function getStories() {
  let url = `${urlBase}/search?from-date=${date}`
  httpGet(url, function (response) {
    let stories = JSON.parse(response).response.results
    stories = stories.map(story => { return new Story(story.webTitle, story.id) })
    viewHeadlines(stories)
  })
}

function getSummary(link) {
  let url = `${summaryUrlBase}/${link}?show-fields=body`
  httpGet(url, function (response) {
    let summary = JSON.parse(response).response.content.fields.body
    viewSummary(summary)
  })
}
