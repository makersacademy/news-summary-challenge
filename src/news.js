class News {
  constructor(){
    this.newsHeadlines = []
  }

//creates XMLHttpRequest and push response to headlines array
  getHeadlines(){
  let key = config.SECRET_KEY
  let url = `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}&show-fields=thumbnail`
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
      const newsArticle = document.createElement('div')
      newsArticle.setAttribute('class', 'article')

      const img = document.createElement('img')
      img.setAttribute('class', 'thumbnail')
      img.src = headline.fields.thumbnail

      const p = document.createElement('p')
      p.textContent = headline.webTitle + '...'

      const a = document.createElement('a')
      a.setAttribute('class', 'article_link')
      a.setAttribute('href', headline.webUrl)
      a.innerText = 'Read more'

      container.appendChild(newsArticle);
      newsArticle.appendChild(img);
      newsArticle.appendChild(p);
      newsArticle.appendChild(a);
    })
    return container;
  }

}
