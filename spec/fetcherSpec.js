const Fetcher = require("../src/fetcher.js").Fetcher
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe


describe("Fetcher Class", function() {
  scenario("It returns a string to fetch urls to form api string", function() {
    var fetch = new Fetcher("hello", "sample_url")
    expect(fetch.concatUrl()).toEqual("http://news-summary-api.herokuapp.com/hello?apiRequestUrl=sample_url")
  })

  scenario("It returns the string for the guardian Api", function() {
    var fetch = new Fetcher("guardian", "sample_url2")
    expect(fetch.concatUrl()).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url2")
  })
})