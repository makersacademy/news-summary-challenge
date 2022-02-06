class NewsModel{

  constructor(){
    this.headlines = []
  }

  getHeadlines(){
    return this.headlines;
  }

  addHeadline(text) {
    this.headlines.push(text)
  }

  setHeadlines(headlines) {
    this.headlines = [...headlines]
  }

}

module.exports = NewsModel;

