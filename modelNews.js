class ModelNews{
  constructor(){
    this.news = []
  }
  getNews(){
    return this.news
  }

  addNews(news){
    this.news.push(news)
  }

  resetNews(){
    this.news = []
  }
}

module.exports = ModelNews;