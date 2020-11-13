let urlBase = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com"
let summaryUrlBase = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com"
let date = new Date().toISOString().slice(0, 10)
let storyList = []

window.onload = function () {
  getStories().then(function () {
    selectStory(0)
  })
}

window.addEventListener('hashchange', function (event) {
  let id = event.newURL.slice(-1)
  let prevId = event.oldURL.slice(-1)
  if (!(prevId >= '0' && prevId <= '9')) prevId = '0'
  selectStory(id, prevId)
}, false)

function getStories() {
  return new Promise(function (resolve, reject) {
    let url = `${urlBase}/search?from-date=${date}`
    httpGet(url, function (response) {
      let stories = JSON.parse(response).response.results
      stories = stories.map(story => { return new Story(story.webTitle, story.id) })
      viewHeadlines(stories)
      storyList = stories
    })
  })
}

function getSummary(id) {
  let story = storyList[id]
  let url = `${summaryUrlBase}/${story.getLink()}?show-fields=body`
  httpGet(url, function (response) {
    let summary = JSON.parse(response).response.content.fields.body
    viewSummary(summary)
  })
}

function selectStory(id, prevId) {
  storyList[id].select()
  if (prevId >= '0' && prevId <= '9') {
    storyList[prevId].deselect()
  }
  viewHeadlines(storyList)
  getSummary(id)
}

