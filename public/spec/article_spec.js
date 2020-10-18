class ArticleSpec {
  
  static articleTitle() { 
    var object = JSON.parse('{"webTitle":"The cats", "webUrl":"www.cats.com", "sectionId":"Pets"}')
    var article = new Article(object.webTitle, object.webUrl, object.sectionId)
    
    Test.assert(article.title == "The cats", "The article has the correct title.")
  }

  static articleUrl() {
    var object = JSON.parse('{"webTitle":"The cats", "webUrl":"www.cats.com", "sectionId":"Pets"}')
    var article = new Article(object.webTitle, object.webUrl, object.sectionId)
    
    Test.assert(article.url == "www.cats.com", "The article has the correct URL.")
  }

  static articleSectionId() {
    var object = JSON.parse('{"webTitle":"The cats", "webUrl":"www.cats.com", "sectionId":"Pets"}')
    var article = new Article(object.webTitle, object.webUrl, object.sectionId)

    Test.assert(article.section == "Pets", "The article has the correct section.")
  }

  static articleOutput() {
    var object = JSON.parse('{"webTitle":"The cats", "webUrl":"www.cats.com", "sectionId":"Pets"}')
    var article = new Article(object.webTitle, object.webUrl, object.sectionId)

    Test.assert()
  }

}
