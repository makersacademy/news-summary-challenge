var article1 = new Article("Title1", "Body1")
var article2 = new Article("Title2", "Body2")

var articleList = new ArticleList();
articleList.addArticle(article1);
articleList.addArticle(article2);
var listView = new ListView(articleList);

describe("ListView",
it("renders a list of titles",
expect(listView.renderView()).toEqual("<ul><li><h3>Title1</h3></li><li><h3>Title2</h3></li></ul>")))
