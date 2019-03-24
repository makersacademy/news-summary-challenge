class NewsList {
  constructor() {
    this.newsArray = [];
  }
}
  add(title, url, pic) {
    this.newsArray.push(new News(title, url, pic));
  }
  displayArticles () {
    let div = document.createElement('div')
    for (var i=0; i<this.articles.length; i++) {
      div.appendChild(this.displayArticle(this.articles[i]))
    }
    return div
  }

  displayArticle(article) {
    let newsDiv = document.createElement('div')
    newsDiv.setAttribute("style", "margin-bottom: 3em")
    let title = document.createElement('p')
    let url = document.createElement('a')
    let pic = document.createElement('img')

    pic.setAttribute("src", news.pic)
    newsDiv.appendChild(pic)

    title.innerText = news.title
    newsDiv.appendChild(title)

    url.setAttribute("href", news.url)
    url.innerText = "Read the article on the Guardian website"
    newsDiv.appendChild(url)

    newsDiv.addEventListener('click', function() {
      var event = new CustomEvent('clicked_event', { detail: news } );
      document.dispatchEvent(event);
    })

    return newsDiv
  }


}