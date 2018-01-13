class ArticleTest extends UnitTest{
  testEmptyThumbnailOnInit(){
    var article = new Article();
    return new Expect(article.thumbnail).toEqual("");
  }

  testEmptyContentOnInit(){
    var article = new Article();
    return new Expect(article.content).toEqual("");
  }
}

var articleTest = new ArticleTest();
