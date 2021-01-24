class News {
  constructor() {
    this.date = this.getDate()
  }
  getDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear();
    today = `${year}-${month}-${day}`
    return today
  }
  connectAPI() {
    let url = "https://content.guardianapis.com/search?"
    let tag = "&tag=politics/politics"
    let date = this.getDate()
    let api = "&api-key=be4ccfea-6ee5-4d67-aa1e-2d8c1a87574e"
    fetch(`${url}${tag}&from-date=${date}${api}&show-fields=all`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        let res = data.response.results
        this.renderNews(res)
      })
  }
  renderNews(res) {
    for (let i = 0; i < res.length; i++) {
      let news_div = document.createElement('div')
      let news_img = document.createElement('img')
      news_img.setAttribute("src", `${res[i].fields.thumbnail}`)
      let news_title = document.createElement('h2')
      news_title.innerHTML = `${res[i].webTitle}`
      let news_text = document.createElement('p')
      news_text.innerHTML = `${res[i].fields.bodyText}`.substring(0, 300)
      let news_link = document.createElement('a')
      news_link.setAttribute("href", `${res[i].webUrl}`)
      news_link.innerHTML = "See more"
      news_div.appendChild(news_img);
      news_div.appendChild(news_title);
      news_div.appendChild(news_text);
      news_div.appendChild(news_link);
      document.body.appendChild(news_div)
    }
  }

}