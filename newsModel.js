class NewsModel {
  constructor() {
    this.news = [];
  }

  add(news) {
    news.forEach(item => {
      this.news.push(item);
    })
  }

  getNews(){
    return this.news;
  }

  filter(wordOrPhrase) {
    const lowerCaseWords = wordOrPhrase.toLowerCase().split(" ")
    let result = []
    this.news.map(item => {
      lowerCaseWords.forEach(word => {
        if (item.webTitle.toLowerCase().includes(word)) {
          result.push(item)
        }
      })
    })
    return result;
  }  
}

module.exports = NewsModel;