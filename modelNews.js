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

// const model = new ModelNews;
// model.addNews("hello")
// console.log(model.getNews())

module.exports = ModelNews;