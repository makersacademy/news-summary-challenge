class NewsCollection {
  constructor() {
    this.collection = {};
  }

  addNews(news) {
    if (news != null) {
      this.collection[news.articleUrl] = news;
    } else {
      console.log("The provided news object is undefined")
    }
  }

  getNewsByUrl(newsUrl) {
    if (newsUrl) {
      return this.collection[newsUrl]
    } else {
      console.log("The provided newsUrl is empty")
    }
  }

}
