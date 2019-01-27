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
    let url = document.createElement('a')
    let pic = document.createElement('img')

    pic.setAttribute("src", article.pic)
    articleDiv.appendChild(pic)

    title.innerText = article.title
    articleDiv.appendChild(title)

    url.setAttribute("href", article.url)
    url.innerText = "Read the article on the Guardian website"
    articleDiv.appendChild(url)

    articleDiv.addEventListener('click', function() {
      var event = new CustomEvent('clicked_event', { detail: article } );
      document.dispatchEvent(event);
    })

    return articleDiv
  }


}
