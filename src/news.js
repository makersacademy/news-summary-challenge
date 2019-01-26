class News {
  constructor(){
    this.newsHeadlines = []
  }

//creates XMLHttpRequest and push response to headlines array
  getHeadlines(){
  let key = config.SECRET_KEY
  let url = `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}`
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
    request.onload = () => {
      let data = JSON.parse(request.response)
      if (request.status >= 200 && request.status < 400) {
          this.newsHeadlines.push(data.response.results)
      } else {
        console.log('Failed to retrieve news')
      }
    }
    request.send()
  }

  displayHeadlines(){
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    this.newsHeadlines[0].forEach((headline) =>{
      const article = document.createElement('div')
      article.setAttribute('class', 'article')

      let h3 = document.createElement('h3')
      h3.textContent = headline
      container.appendChild(article);
      article.appendChild(h3);
    })
  }

}
