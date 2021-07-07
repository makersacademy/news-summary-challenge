class ArticleTest extends UnitTest{
  testEmptyThumbnailOnInit(){
    var article = new Article();
    return new Expect(article.thumbnail).toEqual("");
  }

  testEmptyContentOnInit(){
    var article = new Article();
    return new Expect(article.content).toEqual("");
  }

  testEmptyUrlOnInit(){
    var article = new Article();
    return new Expect(article.url).toEqual("");
  }

  testEmptyTitleOnInit(){
    var article = new Article();
    return new Expect(article.title).toEqual("");
  }

  testEmptyDateOnInit(){
    var article = new Article();
    return new Expect(article.date).toEqual("");
  }

  testEmptyApiUrlOnInit(){
    var article = new Article();
    return new Expect(article.apiUrl).toEqual("");
  }
}

var articleTest = new ArticleTest();
