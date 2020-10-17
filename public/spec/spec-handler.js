class SpecHandler {

  static css() {
    var redGreen = document.getElementsByClassName("log-string");

    // console.log(redGreen[0].innerHTML)

      for ( var index = 0; index <= redGreen.length; index++ ) {
      
      if (redGreen[index].innerText.includes("passed")) {
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        redGreen[index].setAttribute("class", "test-passed")
        // console.log(redGreen[index])
      } else {
        redGreen[index].innerHTML.setAttribute("class", "test-failed");
      }
    }
  }

  static tests() {
    ArticleListSpec.addArticleTest()
    ArticleListSpec.createArticleTest()
    ArticleSpec.articleTitle()
    ArticleSpec.articleUrl()
    ArticleSpec.articleSectionId()
    ArticleViewSpec.checkAccessTest()
    ArticleViewSpec.checkOutputTest()
    ArticleViewSpec.multiArticleOutput()
  }

}