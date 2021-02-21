"use strict";

let articles = []

function callAPI(url, fetchFunction = fetch, options = {}) {
  return fetchFunction(url + queryString(options))
}

function getLatestArticles(fetchFunction = fetch) {
  let today = new Date
  let yyyy = today.getFullYear()
  let mm = today.getMonth() + 1
  if(mm < 10) { mm = "0" + mm}
  let dd = today.getDate()
  if(dd < 10) { dd = "0" + dd}
  let fromDate = [yyyy, mm, dd].join('-')
  let targetURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search"
  callAPI(targetURL, fetchFunction, {"from-date": fromDate})
    .then(response => response.json())
    .then(data => {
      data.response.results.forEach(article => {
        // console.log("Title", article.webTitle)
        articles.push({headline: article.webTitle})
        // console.log(articles)
    })
  })
}

function queryString(options) {
  if(Object.keys(options).length <= 0) { return "" }
  let keyValuePairs = []
  Object.keys(options).forEach((key) => {
    keyValuePairs.push(`${key}=${options[key]}`)
  })
  return '?' + keyValuePairs.join('&')
}
