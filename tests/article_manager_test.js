class ArticleManagerTest extends UnitTest{
  testEmptyArrOnInit(){
    var articleManager = new ArticleManager();
    return new Expect(articleManager.getArticles().length).toEqual(0);
  }

  testAddArticle(){
    var articleManager = new ArticleManager();
    articleManager.addArticle();
    return new Expect(articleManager.getArticles().length).toEqual(1);
  }

  testAddArticlesFromJson(){
    var articleManager = new ArticleManager();
    articleManager.addArticles(testData);
    return new Expect(articleManager.getArticles().length).toEqual(10);
  }
}

var articleManagerTest = new ArticleManagerTest();
