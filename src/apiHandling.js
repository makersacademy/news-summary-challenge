"use strict";

function callAPI(url, fetchFunction = fetch, options = {}) {
  let queryString = ''
  if(Object.keys(options).length > 0) {
    let keyValuePairs = []
    Object.keys(options).forEach((key) => {
      keyValuePairs.push(`${key}=${options[key]}`)
    })
    queryString = '?' + keyValuePairs.join('&')
  }
  return fetchFunction(url + queryString)
}
