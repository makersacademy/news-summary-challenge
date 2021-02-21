"use strict";

function callAPI(url, fetchFunction = fetch, options = {}) {
  return fetchFunction(url + queryString(options))
}

function queryString(options) {
  if(Object.keys(options).length <= 0) { return "" }
  let keyValuePairs = []
  Object.keys(options).forEach((key) => {
    keyValuePairs.push(`${key}=${options[key]}`)
  })
  return '?' + keyValuePairs.join('&')
}
