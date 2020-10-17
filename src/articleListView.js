class ArticleListView {
  
  constructor(articlelist) {
    this.articleList = articlelist
  }

  getArticles(id) {
    return this.articleList.articles[id].headline
  }

  outputHTML() {
    let html = ''
    for (let count = 0; count < this.articleList.articles.length; count ++) {
      html = "<div><h1>" +
              this.articleList.articles[count].headline +
              "</h1><p>" + 
              this.articleList.articles[count].body +
              "</p></div>"
    }
    return html;
  }

}