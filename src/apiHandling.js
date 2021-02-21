"use strict";

var articles = []


function callAPI(url, fetchFunction = fetch, options = {}) {
  return fetchFunction(url + queryString(options))
}

function getLatestArticles(fetchFunction = fetch) {
  articles = []

  let fromDate = todayString()
  let targetURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search"
  return callAPI(targetURL, fetchFunction, {"from-date": fromDate})
    .then(response => response.json())
    .then(data => {
      data.response.results.forEach(article => {
        articles.push({headline: article.webTitle})
      })
      updateHeadlines()
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

function todayString() {
  let today = new Date
  let yyyy = today.getFullYear()
  let mm = today.getMonth() + 1
  if(mm < 10) { mm = "0" + mm}
  let dd = today.getDate()
  if(dd < 10) { dd = "0" + dd}
  return [yyyy, mm, dd].join('-');
}
