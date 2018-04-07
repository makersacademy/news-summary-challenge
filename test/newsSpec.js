const reqNews = require("../public/src/news.js")
const mocha = require('mocha');
const expect = require('chai').expect;

describe("News", function() {

  before(function() {
    news = new reqNews.News();
    article1 = { title: "Title 1", body: "News body 1" };
    article2 = { title: "Title 2", body: "News body 2" };
  });

  describe("#add", function() {
    it("adds an article to the _stories array", function() {
      news.add(article1);
      expect(news._stories[0]).to.include({ title: "Title 1", body: "News body 1" });
    });
  });

  describe("#all", function() {
    it("returns all elements in the news array", function() {
      news.add(article2);
      let allStories = news.all();
      expect(allStories).to.deep.equal([ { title: 'Title 1', body: 'News body 1' },
  { title: 'Title 2', body: 'News body 2' } ]);
    });
  });

});
