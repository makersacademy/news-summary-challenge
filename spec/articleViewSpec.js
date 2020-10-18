class ArticleDouble {
  constructor() {
    this.id = 1;
    this.headline = "Headline";
    this.content = "Content";
    this.author = "Author";
    this.date = "18-10-2020";
  }
}

class ArticleViewSpec {
  static viewHasArticle() {
    var articleDouble = new ArticleDouble();
    var articleView = new ArticleView(articleDouble);
    console.log(
      Assert.isTrue(
        "View has an article",
        articleView.article === articleDouble
      )
    );
  }
  static viewCreatesHtml() {
    var articleDouble = new ArticleDouble();
    var articleView = new ArticleView(articleDouble);

    console.log(
      Assert.isTrue(
        "view creates HTML around content",
        articleView.generateArticleHTML() === "<div>Content</div>"
      )
    );
  }
}

ArticleViewSpec.viewHasArticle();
ArticleViewSpec.viewCreatesHtml();
