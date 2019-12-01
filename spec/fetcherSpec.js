const Fetcher = require("../src/fetcher.js").Fetcher
const expect = require("../lib/tester.js").expect

var fetch = new Fetcher("gaurdian", "sample_url")

try {
  expect(fetch.getApiUrl()).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url")
} catch (error) {
  console.log(error)
}


