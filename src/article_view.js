class ArticleView {

  constructor(articleList) {
    this.articleList = articleList.articles
  }
  

  output(){
    var htmlString = "<div>"
    var allArticles = this.articleList

    for (var index = 0; index <= allArticles.length-1; index++) {
      htmlString += "<div><img src='PLACEHOLDER' class='image'><h1>" + allArticles[index].title + "</h1><h3>" + allArticles[index].section + "</h3><a href='" + allArticles[index].url + "' >Click here to read the full article</a><br><hr><br></div>"
    }
    return htmlString + "</div>"

  }

}
