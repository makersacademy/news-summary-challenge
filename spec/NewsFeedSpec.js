// Unit tests for newsfeed class
console.log("spec/NewsFeedSpec.js")
console.log("--------------------------")
let newsFeed = new NewsFeed()
// let article = new Article("fake headline", "fake textBody", "fake id", "fake url")

it("it a member of the NewsFeed class", function() {
  expect(newsFeed instanceof NewsFeed).toEqual(true);
})

it("getArticles method returns list of articles", function() {
  expect(newsFeed.getArticles()).toEqual(newsFeed.articles);
})

it("addArticle method adds article to this.articles", function() {
  newsFeed.addNewArticle('article');
  expect(newsFeed.getArticles().length).toEqual(1);
  expect(newsFeed.getArticles()).toEqual(newsFeed.articles)
})
