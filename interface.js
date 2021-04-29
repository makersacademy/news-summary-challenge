'use strict';

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback)
}

ready(() => {  

  fetch("https://content.guardianapis.com/search?from-date=2021-03-23&to-date=2021-03-24&show-fields=headline%20thumbnail&q=uk&api-key=test")
  .then(response => response.json())
  .then( body => {
    console.log(body)
    // get div element from page
    let div = document.getElementById('headlines')

    for(let i = 0; i < body.response.results.length; i++){
      if(body.response.results[i].type === "article") {
        // console.log(body.response.results[i].webTitle)
        const article = new Article(body.response.results[i])
        div.appendChild(article.toNode())
      }
    }
  })

});

class Article {
  constructor(data) {
    this.title = data.webTitle
    this.url = data.webUrl
  }

  toNode() {
    let node = document.createElement('div')
    let title = document.createElement('h2')
    title.innerText = this.title
    node.appendChild(title)

    this.fetchPictures(function(data){
      let divImg = document.createElement('div')
      let img = document.createElement('img')
      img.src = data.response.content.fields.thumbnail
      divImg.appendChild(img)
      node.appendChild(divImg)
    })

    let link = document.createElement('a')
    link.innerText = 'View Article'
    link.setAttribute('href', this.url)
    node.appendChild(link)
    
    this.fetchSummary(function(data){
      let text = document.createElement('p')
      text.innerText = data.sentences
      node.appendChild(text)
    })
    return node
  }

 fetchSummary(callback) {
   fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.url}`)
   .then(response => {return response.json() })
   .then(callback)
  }

 fetchPictures(callback){
   const picUrl = this.url.replace('https://www.theguardian.com/','')
   const url = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${picUrl}?show-fields=thumbnail`
   fetch(url)
   .then(response => { return response.json() })
   .then(callback)
 }

}
