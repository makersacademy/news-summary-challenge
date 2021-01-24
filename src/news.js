class News {
  constructor() {
    this.date = this.getDate()
    this.articles = []
  }
  getDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear();
    today = `${year}-${month}-${day}`
    return today
  }
  getNews() {
    return "UK vaccine adviser says delay..."
  }
  connectAPI() {
    let url = "https://content.guardianapis.com/search?"
    let tag = "&tag=politics/politics"
    let date = this.getDate()
    let api = "&api-key=be4ccfea-6ee5-4d67-aa1e-2d8c1a87574e"
    fetch(`${url}${tag}&from-date=${date}${api}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        let res = data.response.results
        for (let i = 0; i < res.length; i++) {
          document.write(`<p><a href="${res[i].webUrl}"> ${res[i].webTitle}</a></p>`)
        }
      })
  }

}