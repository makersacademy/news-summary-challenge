
class AritclesApi {
  constructor(){
    this.date = new Date();
    this.date = this.date.toISOString().split('T')[0];
  }
  loadHeadlines = (callback) => {
    try {
      fetch(`https://content.guardianapis.com/search?page=1&from-date=${this.date}&show-fields=thumbnail&api-key=${process.env.API}&page-size=25`)
      .then(response => response.json())
      .then(data => callback(data))
    } catch(err) {
      console.log(err)
    }
  }

}

module.exports = AritclesApi; 