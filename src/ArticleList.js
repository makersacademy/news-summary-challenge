class ArticleList {
  constructor() {
    this.articles = [];
  }

  add(title, url, pic) {
    this.articles.push(new Article(title, url, pic));
  }

  displayArticles () {
    let div = document.createElement('div')
    for (var i=0; i<this.articles.length; i++) {
      div.appendChild(this.displayArticle(this.articles[i]))
    }
    return div
  }

  displayArticle(article) {
    let articleDiv = document.createElement('div')
    let title = document.createElement('p')
    let url = document.createElement('p')
    let pic = document.createElement('p')
    title.innerText = article.title
    url.innerText = article.url
    pic.innerText = article.pic
    articleDiv.appendChild(title)
    articleDiv.appendChild(url)
    articleDiv.appendChild(pic)
    return articleDiv
  }

  // formatDate() {
  //   var currentDate = new Date();
  //   var date = currentDate.getDate();
  //   var month = currentDate.getMonth();
  //   var year = currentDate.getFullYear();
  //   var dateString = year + "-" + "0" + (month + 1) + "-" + date;
  //   return dateString;
  // }

}
