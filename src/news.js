class News {
  constructor(){
    this.newsHeadlines = []
  }

  getHeadlines(){
  let key = config.SECRET_KEY
  let url = `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}`
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
    request.onload = () => {
      let data = JSON.parse(request.response)
      if (request.response > 200) {
          this.newsHeadlines.push(data)
      } else {
        console.log('Failed to retrieve news')
      }

    }
    request.send()
  }

}
