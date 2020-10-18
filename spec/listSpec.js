class ListSpec {
  static listCanAddArticle() {
    var list = new List();
    list.addArticle("Headline", "blahblah");
    console.log(
      Assert.isEqual(
        "list can add an article",
        list._articles[0].headline,
        "Headline"
      )
    );
  }
  static listCanShowArticle() {
    var list = new List();
    list.addArticle("Headline", "blahblah");
    console.log(
      Assert.isEqual(
        "list can show an article",
        list.viewArticles()[0].content,
        "blahblah"
      )
    );
  }
  static listCanFindArticleById() {
    var list = new List();
    list.addArticle("Headline", "blahblah");
    list.addArticle("Headline2", "blahblahblah");
    console.log(
      Assert.isEqual(
        "list can find by id",
        list.findArticleById(1).headline,
        "Headline2"
      )
    );
  }
}
ListSpec.listCanAddArticle();
ListSpec.listCanShowArticle();
ListSpec.listCanFindArticleById();
