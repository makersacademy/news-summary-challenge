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
        const article = new Article(body.response.results[i],[i])
        div.appendChild(article.toNode())
      }
    }
  })

});

class Article {
  constructor(data, index) {
    this.title = data.webTitle
    this.url = data.webUrl
    this.index = index
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
    link.innerText = 'View original article'
    link.setAttribute('href', this.url)
    node.appendChild(link)
    
    this.fetchSummary(function(data){
      let summaryDiv = document.createElement('div')
      node.appendChild(summaryDiv)
      
      // add summarised text - works
      let text = document.createElement('p')
      text.innerText = data.sentences
      text.id = `${this.index}`
      summaryDiv.appendChild(text)
      
      //hide text - can't successfully get a value to be read
      document.getElementById(`${this.index}`).style.display = "none"
      // //make link for toggling text
      let toggler = document.createElement('p')
      toggler.innerText = 'Show article summary'
      summaryDiv.appendChild(toggler)
      
      // //add event listener
      // toggler.addEventListener("click", function() { 
      //   if (document.querySelector(text).style.display === "none") {
      //     document.querySelector(text).style.display = "block"
      //     toggler.innerText = "Hide article summary"
      //   } else {
      //     document.querySelector("#toggle").style.display = "none"
      //     test.innerText = "Show article summary"
      //   }
      // });
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

 toggleSummary(){
   //hide text
  document.querySelector(text).style.display = "none"
  //make link for toggling text
  let toggler = document.createElement('p')
  toggler.innerText = 'Show article summary'
  node.appendChild(toggler)
  //add event listener
  toggler.addEventListener("click", function() { 
    if (document.querySelector(text).style.display === "none") {
      document.querySelector(text).style.display = "block"
      toggler.innerText = "Hide article summary"
    } else {
      document.querySelector("#toggle").style.display = "none"
      test.innerText = "Show article summary"
    }
  });

 }

}
