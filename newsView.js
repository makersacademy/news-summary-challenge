const FeedModel = require("./model/feedModel")

class NotesView {
  constructor(feed) {
    this.feed = feed
    this.articlesButtonEl = document.querySelector("#get-articles")

    this.articlesButtonEl.addEventListener("click", () => {
      this.displayArticles()
    })
  }

  displayArticles() {
    this.feed.getFeed().forEach(article => {
      const body = document.querySelector("body")
      const newArticle = document.createElement("div")
      newArticle.classList.add("article")
      newArticle.textContent = article.headline
      body.append(newArticle)
    })
    document.querySelectorAll('div')
  }
}

module.exports = NotesView