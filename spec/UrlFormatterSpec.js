const UrlFormatter = require("../src/UrlFormatter.js").UrlFormatter
const expect = require("../lib/tester.js").expect
const it = require("../lib/tester.js").it
const describe = require("../lib/tester.js").describe
const context = require("../lib/tester.js").context


var formatter = new UrlFormatter()

context("Formatting URLS", function() {
  describe(".UrlFormatter", function() {
    it("returns the string for the Aylien Api", function() {
      expect(formatter.concatUrl("aylien", "sample_url")).toEqual("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=sample_url")
    })
  
    it("returns the string for the Guardian Api", function() {
      expect(formatter.concatUrl("guardian", "sample_url2")).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url2")
    })
  })
  
  describe("#getAylienUrl", function() {
    it("returns a url for the aylien api to summarize the google front page", function() {
      expect(formatter.getAylienUrl("google.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=google.com")
    })
  
    it("returns a url for the aylien api to summarize the wikipedia front page", function() {
      expect(formatter.getAylienUrl("wikipedia.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=wikipedia.com")
    })
  })
})