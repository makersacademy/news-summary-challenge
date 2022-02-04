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

}

module.exports = NewsModel;

