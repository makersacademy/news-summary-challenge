var article1 = {
  title: "Title1",
  body: "Body1"
}
var article2 = {
  title: "Title2",
  body: "Body2",
}

article1.addId = function() {
  article1['id'] = 0
}

article2.addId = function() {
  article1['id'] = 1
}

var articleList = new ArticleList();
articleList.addArticle(article1);
articleList.addArticle(article2);

describe("ArticleList",
it("can add articles", expect(articleList.list[0]['title']).toEqual("Title1")));

describe("ArticleList",
it("can return all articles it has", expect(articleList.getAll().length).toEqual(2)));

describe("ArticleList",
it("can find an article by its ID", expect(articleList.findById(0)['title']).toEqual("Title1")));
