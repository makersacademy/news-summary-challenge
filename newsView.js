class NewsView {
  constructor(feed) {
    this.feed = feed
    this.articlesButtonEl = document.querySelector("#get-articles")
    this.articlesButtonEl.addEventListener("click", () => {
      this.displayArticles()
    })
  }

  displayArticles() {
    console.log(this.feed.getFeed())
    this.feed.getFeed().forEach((article) => {
      const body = document.querySelector("body")
      const imageEl = document.createElement("img");
      const headlineEl = document.createElement('div');
      imageEl.setAttribute("id", "image");
      headlineEl.setAttribute("id", "article");
      imageEl.src = article.imageUrl;
      headlineEl.innerText = article.headline;
      body.append(headlineEl);
      body.append(imageEl);
    })
    document.querySelectorAll('div')
  }
}

module.exports = NewsView