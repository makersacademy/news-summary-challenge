describe("ArticleController", function() {
  var articleList = new ArticleList();
  articleList.create("http://test1.com", "Headline1");
  articleList.create("http://test2.com", "Headline2");
  var articleListView = new ArticleListView(articleList);
  var article1 = articleList.articles[0];
  article1.content = "TEST_CONTENT";
  var article2 = articleList.articles[1];
  article2.content = "TEST_CONTENT2";
  var articleView1 = new ArticleView(article1);
  var controller = new ArticleController(articleList);

  document.getElementByIdOriginal = document.getElementById;
  var htmlMock = {
    articleContainer: {
      innerHTML: "string"
    },
    articleListContainer: {
      innerHTML: "string"
    }
  };
  document.getElementById = function(id) { return htmlMock[id]; };

  describe(".loadHTML()", function() {

    it("adds html from article view to location", function() {
      controller.loadHTML(articleView1, "articleContainer");
      expect(htmlMock.articleContainer.innerHTML).toBe("<p>TEST_CONTENT</p>");
    });
    it("adds html from article list view to location", function() {
      controller.loadHTML(articleListView, "articleListContainer");
      expect(htmlMock.articleListContainer.innerHTML).toBe("<ul><li><a href='#articles/1'>Headline1</a></li><li><a href='#articles/2'>Headline2</a></li></ul>");
    });
  });
  describe("listenForHashChange", function() {
    it("changes articleContainer html on hashchange", function() {
      controller.listenForHashChange();
      window.location.hash = "articles/2";
      var hashchange = new Event("hashchange");
      window.dispatchEvent(hashchange);
      expect(htmlMock.articleContainer.innerHTML).toBe("<p>TEST_CONTENT2</p>");
    });
  });
});
