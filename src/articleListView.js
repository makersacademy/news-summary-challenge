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
      html += "<div><img src='" + this.articleList.articles[count].thumbnail + 
              "'><a href='" + this.articleList.articles[count].url + 
              "' target='_blank'><h1>" +
              this.articleList.articles[count].headline +
              "</h1></a></div>"
    }
    return html;
  }

}