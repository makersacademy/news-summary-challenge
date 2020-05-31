(function() {

  class ArticleListDouble {
    constructor(string){
      this.list = []
    }

    listAll(){
      return this.list
    }
  }

  let articleList = new ArticleList();
  let headline = 'This is a headline'

  function testArticleListStoresArray() {
    assert.isTrue(articleList.list.length === 0)
  }

  function testArticleListCanAddArticle() {
    articleList.add(headline);
    assert.isTrue(articleList.list[0].headline === headline)
  }

  function testArticleListShowsAllHeadlines() {
    articleList.add(headline);
    assert.isTrue(articleList.listAll()[0].headline === headline)
  }

  function testArticleGetsId() {
    articleList.add(headline);
    assert.isTrue(articleList.list[0].id === 0)
  }

  testArticleListStoresArray();
  testArticleListShowsAllHeadlines();
  testArticleListCanAddArticle();
  testArticleGetsId();

})()
