var article1 = {
  title: 'Title1',
  body: 'Body1'
}

article1.getTitle = function() {
  return article1.title;
}

article1.getBody = function() {
  return article1.body;
}

var articleView = new ArticleView(article1)


describe("ArticleView",
it("has a formatted title and a body", expect(articleView.renderView()).toEqual("<h3>Title1</h3><br><p>Body1</p>")));

describe("ArticleView",
it("can show an article summary (title only atm)", expect(articleView.renderTitle()).toEqual('<li><h3>Title1</h3></li>')));
