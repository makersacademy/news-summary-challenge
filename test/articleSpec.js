const reqArt = require("../public/src/article.js")
const mocha = require('mocha');
const expect = require('chai').expect;

describe("Article", function() {

  before(function() {
    article = new reqArt.Article("This is my title", "This is my body text");
  });

  describe("#getTitle", function() {
    it("returns the title of the article", function() {
      title = article.getTitle();
      expect(title).to.equal("This is my title");
    });
  });

  describe("#getBody", function() {
    it("returns the body of the article", function() {
      body = article.getBody();
      expect(body).to.equal("This is my body text");
    });
  });

});
