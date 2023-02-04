class ArticlesModel{
  // Stores URL to link to, Headline and Image URL in array of arrays
  constructor(){
    this.articles = []
  }

  // Takes api response and extracts required 3 criteria and stores
  // in this.articles
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
    }
  return this.articles
  }

  // Returns all articles stored in this.articles
  getArticles(){
    return this.articles;
  }
}

module.exports = ArticlesModel;