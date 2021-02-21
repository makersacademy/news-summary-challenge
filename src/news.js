class News {
  constructor(newsData) {
    this.newsData = newsData;
  }

  eachNewsHeadline(index) {
    let headline = document.createElement('a');
    headline.href = '#' + index;
    headline.id = 'article' + index;
    headline.textContent = this.newsData.webTitle;
    return headline;
  }

}
