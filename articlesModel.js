class ArticlesModel{
  constructor(){
    this.articles = []
  }

  setArticles(articles){
  let numberOfArticles = articles.response.results.length
  let counter = 0
  
  while(counter < numberOfArticles){
      let article = []
      article.push(articles.response.results[counter].webUrl)
      article.push(articles.response.results[counter].fields.headline)
      article.push(articles.response.results[counter].fields.thumbnail)
      this.articles.push(article)
      counter++
      console.log(this.articles)
    }
  return this.articles
  }

  getArticles(){
    return this.articles;
  }
}

module.exports = ArticlesModel;