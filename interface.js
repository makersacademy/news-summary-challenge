'use strict';

const dataset = [
  { 
    id: 0,
    heading: "1st dummy heading",
    img: "images/dummy.jpeg",
},
  { 
    id: 1,
    heading: "2nd dummy heading",
    img: "images/dummy.jpeg",
}
]

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {  

  fetch("https://content.guardianapis.com/search?from-date=2021-03-23&to-date=2021-03-24&show-fields=headline%20thumbnail&q=uk&api-key=test")
  .then(response => response.json())
  .then( body => {
    // get div element from page
    let div = document.getElementById('headlines')

    for(let i = 0; i < body.response.results.length; i++){
      if(body.response.results[i].type === "article") {
        console.log(body.response.results[i].webTitle)
        const article = new Article(body.response.results[i])
        div.appendChild(article.toNode())
      }
    }
  })

});

class Article {
  constructor(data) {
    this.title = data.webTitle
  }

  toNode() {
    let node = document.createElement('h2')
    node.innerText = this.title
    return node
  }
}

function getHeadlines(stories) {
  //get date i.e.new Date() and convert
  fetch("https://content.guardianapis.com/search?from-date=2021-03-23&to-date=2021-03-24&show-fields=headline%20thumbnail&q=uk&api-key=test")
  .then(response => response.json())
  .then( body => {
    for(let i = 0; i < body.response.results.length; i++){
      if(body.response.results[i].type === "article") {
        // let apiUrl = body.response.results[i].apiUrl
        // let id = body.response.results[i].id
        let webTitle = body.response.results[i].webTitle
        let webUrl = body.response.results[i].webUrl
        let entry = { webTitle: webTitle, webUrl: webUrl }
        stories.push(entry)
        // console.log(body.response.results[i])
      }

    }
    
    // console.log(articles) 
    console.log(body.response.results) 
  })
}

function printHeadlines(stories) {
  let parentdiv = document.createElement('div')
  parentdiv.id='headlines'

  for(let index = 0; index < stories.length; index++) {
    if(stories[index].img) {
      let div = document.createElement('div')
      let h3 = document.createElement('h3')
      h3.textContent = stories[index].webTitle
      // div.appendChild(img)
      div.appendChild(h3)
      parentdiv.appendChild(div)
    }
  }

  document.body.appendChild(parentdiv)
};


//publish headlines

//use article.webTitle to print a headline

function dummyImgPrint() {
  let parentdiv = document.createElement('div')
  parentdiv.id='headlines'

  for(let index = 0; index < dataset.length; index++) {
    if(dataset[index].img) {
      let div = document.createElement('div')
      let h3 = document.createElement('h3')
      let img = document.createElement('img')
      img.src = dataset[index].img
      h3.textContent = dataset[index].heading
      div.appendChild(img)
      div.appendChild(h3)
      parentdiv.appendChild(div)
    }
  }

  document.body.appendChild(parentdiv)
};

function dummyHeadlinesPrint() {
  let parentdiv = document.createElement('div')
  parentdiv.id='headlines'

  for(let index = 0; index < dataset.length; index++) {
    if(dataset[index].img) {
      let div = document.createElement('div')
      let h3 = document.createElement('h3')
      // let img = document.createElement('img')
      // img.src = dataset[index].img
      h3.textContent = dataset[index].heading
      // div.appendChild(img)
      div.appendChild(h3)
      parentdiv.appendChild(div)
    }
  }

  document.body.appendChild(parentdiv)
};
