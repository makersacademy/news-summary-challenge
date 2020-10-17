class ViewControllerTest {
  static viewTest() {
    var list = new ArticleList
    list.createArticle("The cats", "www.cats.com", "Pets")
    
    var controller = new ViewController(list)

    // Assert.test(controller.output() == )
  }

}
