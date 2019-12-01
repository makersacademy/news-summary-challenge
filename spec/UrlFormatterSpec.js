const UrlFormatter = require("../src/UrlFormatter.js").UrlFormatter
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe


var formatter = new UrlFormatter()

describe(".UrlFormatter", function() {
  scenario("It returns the string for the Aylien Api", function() {

    expect(formatter.concatUrl("aylien", "sample_url")).toEqual("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=sample_url")
  })

  scenario("It returns the string for the Guardian Api", function() {
    expect(formatter.concatUrl("guardian", "sample_url2")).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url2")
  })
})

describe("#getAylienUrl", function() {
  scenario("It returns a url for the aylien api to summarize the google front page", function() {
    expect(formatter.getAylienUrl("google.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=/google.com")
  })

  scenario("It returns a url for the aylien api to summarize the wikipedia front page", function() {
    expect(formatter.getAylienUrl("wikipedia.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=/wikipedia.com")
  })
})