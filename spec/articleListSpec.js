console.log("Article list tests")
console.log("--------------------")

class FakeArticleClass {
  constructor(headline, thumbnail, urlID, serialID) {
    this.headline = headline;
    this.thumbnail = thumbnail;
    this.urlID = urlID;
    this.serialID = serialID;
  }

  getHeadline() {
    return this.headline;
  }
}

it("Is an instance of the ArticleList class", function() {
  let myArticleList = new ArticleList(FakeArticleClass);
  expect(true).toEqual(myArticleList instanceof ArticleList);
})

it("Adds an article correctly", function() {
  let myArticleList = new ArticleList(FakeArticleClass);
  myArticleList.addArticle("headline", "thumbnail", "urlID");
  expect(1).toEqual(myArticleList.getAllArticles().length);
})

it("Adds two articles correctly and returns them with #getAllArticles", function() {
  let myArticleList = new ArticleList(FakeArticleClass);
  myArticleList.addArticle("headline1", "thumbnail1", "urlID1");
  myArticleList.addArticle("headline2", "thumbnail2", "urlID2");
  expect(2).toEqual(myArticleList.getAllArticles().length);
})

it("Can retreive the correct specific article", function() {
  let myArticleList = new ArticleList(FakeArticleClass);
  myArticleList.addArticle("headline0", "thumbnail0", "urlID0");
  myArticleList.addArticle("headline1", "thumbnail1", "urlID1");
  myArticleList.addArticle("headline2", "thumbnail2", "urlID2");
  expect("headline1").toEqual(myArticleList.getArticleByID(1).getHeadline());
})

it("Returns the expected array of headlines", function() {
  let myArticleList = new ArticleList(FakeArticleClass);
  myArticleList.addArticle("headline0", "thumbnail0", "urlID0");
  myArticleList.addArticle("headline1", "thumbnail1", "urlID1");
  myArticleList.addArticle("headline2", "thumbnail2", "urlID2");
  expect(["headline0", "headline1", "headline2"]).toEqualArray(myArticleList.getHeadlines());
})
