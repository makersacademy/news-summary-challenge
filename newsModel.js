class NewsModel {
  constructor() {
    this.news = [];
  }

  add(news) {
    this.news = []
    news.forEach(item => {
      this.news.push(item);
    })
  }

  getNews(){
    return this.news;
  }

  // this can be improved
  filter(wordOrPhrase) {
    const lowerCaseWords = wordOrPhrase.toLowerCase().split(/[\s,]+/)
    let result = []
    this.news.forEach(item => {
      lowerCaseWords.forEach(word => {
        if (item.webTitle.toLowerCase().includes(word)) {
          result.push(item)
        }
      })
    })
    this.news = result;
  }  
}

module.exports = NewsModel;