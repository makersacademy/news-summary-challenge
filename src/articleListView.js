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
      html += "<div class='story-container'><a href='" + this.articleList.articles[count].url + 
              "' target='_blank'><img src='" + this.articleList.articles[count].thumbnail + 
              "'><h1>" +
              this.articleList.articles[count].headline +
              "</h1></a></div>"
    }
    return html;
  }

}