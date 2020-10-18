class ArticleSpec {
  static articleHasHeadline() {
    var article = new Article(1, "News headline");
    console.log(
      Assert.isTrue(
        "article has a headline",
        article.headline === "News headline"
      )
    );
  }
  static articleHascontent() {
    var article = new Article(1, "News headline", "News content");
    console.log(
      Assert.isTrue("article has content", article.content === "News content")
    );
  }
}

// TO DO - tests for date, author, id etc..

ArticleSpec.articleHasHeadline();
ArticleSpec.articleHascontent();
