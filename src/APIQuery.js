function APIQuery (callback) {
  let request = new XMLHttpRequest()
  // the below queries the Guardian API for live data
  // let url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all'

  let url = 'data.json' // this uses a locally stored file with news article data instead of querying the Guardian API - comment out if you want to use live data, and comment in the query above
  
  request.open('GET', url, true)
  request.send()

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(request.responseText)) // parsing text of the returned json object into javascript object ('newsData' parameter for new newsManager())
    }
  }
}

function APIQuerySymmarize (articleurl, callback) {
  let request = new XMLHttpRequest()
  let url = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleurl}`
  request.open('GET', url, true)
  request.send()

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(request.responseText)) // parsing text of the returned json object into javascript object ('textSummaryObject' for View Controller)
    }
  }
}
