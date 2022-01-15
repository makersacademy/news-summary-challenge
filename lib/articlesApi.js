
class Api {
  constructor(){
    this.date = new Date()
    this.date = this.date.toISOString().split('T')[0]
  }
  loadArticles = (callback) => {
    fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?page=1&page-size=20&from-date=${this.date}`)
    .then(response => response.json())
    .then(data => callback(data))
  }

}

module.exports = Api; 